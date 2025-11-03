import { Router } from 'express';
import { query } from '../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit as string) || 50;
    const rankingResult = await query(
      'SELECT username, xp, level FROM users ORDER BY xp DESC, level DESC LIMIT $1',
      [limit]
    );
    res.status(200).json(rankingResult.rows);
  } catch (error) {
    console.error('Erro ao buscar ranking:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// A LINHA MAIS IMPORTANTE:
export default router; // Está 'export default'? Não pode ser 'export { router }' ou algo diferente.
