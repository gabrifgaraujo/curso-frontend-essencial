import { Router } from 'express';
import { z } from 'zod';
import Groq from 'groq-sdk';
import { protect } from '../middleware/authMiddleware';

const router = Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const challengeSchema = z.object({
  topic: z.string().min(3, "O tópico precisa ter pelo menos 3 caracteres."),
});

router.post('/generate-challenge', protect, async (req, res) => {
  try {
    const { topic } = challengeSchema.parse(req.body);

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'Você é um tutor de programação especialista. Sua tarefa é criar um desafio curto e criativo para ser desenhado em um quadro branco digital. O desafio deve ser focado em visualização, como criar um mapa mental, um fluxograma ou um diagrama. Retorne APENAS o texto do desafio, sem introduções ou despedidas. Seja conciso e direto.',
        },
        {
          role: 'user',
          content: `Crie um desafio sobre o seguinte tópico: ${topic}`,
        },
      ],
      model: 'llama3-70b-8192', // Modelo ativo
      temperature: 0.7,
    });

    const challengeText = chatCompletion.choices[0]?.message?.content || 'Desafio não pôde ser gerado.';
    
    res.status(200).json({ challenge: challengeText });

  } catch (error) {
    console.error('❌ Erro ao gerar desafio com a IA:', error);
    res.status(500).json({ message: 'Erro interno ao contatar a IA.' });
  }
});

export default router;
