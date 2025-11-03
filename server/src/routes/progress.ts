import { Router } from 'express';
import { z } from 'zod';
import { query } from '../db';
import { protect, AuthRequest } from '../middleware/authMiddleware';

const router = Router();

const progressSchema = z.object({
  pageIdentifier: z.string().min(1),
});

const XP_PER_PAGE = 10;
const LEVEL_UP_BASE_XP = 100;

router.post('/complete-page', protect, async (req: AuthRequest, res) => {
  try {
    const { pageIdentifier } = progressSchema.parse(req.body);
    const userId = req.user!.id;

    const existingProgress = await query(
      'SELECT * FROM user_progress WHERE user_id = $1 AND page_identifier = $2',
      [userId, pageIdentifier]
    );

    if (existingProgress.rows.length > 0) {
      return res.status(200).json({ message: 'Página já concluída anteriormente.' });
    }

    await query(
      'INSERT INTO user_progress (user_id, page_identifier) VALUES ($1, $2)',
      [userId, pageIdentifier]
    );

    const userResult = await query('SELECT xp, level FROM users WHERE id = $1', [userId]);
    let { xp, level } = userResult.rows[0];

    xp += XP_PER_PAGE;
    const xpForNextLevel = LEVEL_UP_BASE_XP * level;
    let leveledUp = false;

    if (xp >= xpForNextLevel) {
      level += 1;
      leveledUp = true;
    }

    await query('UPDATE users SET xp = $1, level = $2 WHERE id = $3', [xp, level, userId]);

    if (leveledUp) {
      return res.status(200).json({ message: `Parabéns! Você subiu para o nível ${level}!`, leveledUp: true });
    } else {
      return res.status(200).json({ message: `Você ganhou ${XP_PER_PAGE} XP!`, leveledUp: false });
    }
  } catch (error) {
    console.error('Erro ao registrar progresso:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

export default router;
