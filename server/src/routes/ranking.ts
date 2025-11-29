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

    // Converter campos que podem vir como string (bigint) para Number
    const rows = rankingResult.rows.map((r: any) => ({
      username: r.username,
      xp: Number(r.xp) || 0,
      level: Number(r.level) || 0,
    }));

    res.status(200).json(rows);
  } catch (error) {
    console.error('Erro ao buscar ranking:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

export default router;
