import { Router } from 'express'
import { z } from 'zod'
import { query } from '../db'
import { protect, AuthRequest } from '../middleware/authMiddleware'

const router = Router()

// Schema da página concluída
const progressSchema = z.object({
  pageIdentifier: z.string().min(1),
})

// Configurações de XP / Level
const XP_PER_PAGE = 10
const LEVEL_UP_BASE_XP = 100

// Proteções extras contra valores absurdos
const MAX_REASONABLE_XP = 1_000_000_000

router.post('/complete-page', protect, async (req: AuthRequest, res) => {
  try {
    console.log('[progress] Rota executada.')

    // valida input
    const { pageIdentifier } = progressSchema.parse(req.body)
    const userId = req.user!.id

    // verifica se a página já foi concluída
    const existingProgress = await query(
      `SELECT 1 FROM user_progress WHERE user_id = $1 AND page_identifier = $2`,
      [userId, pageIdentifier]
    )

    if (existingProgress.rows.length > 0) {
      return res.status(200).json({
        message: 'Página já concluída anteriormente.',
      })
    }

    // marca página como concluída
    await query(
      `INSERT INTO user_progress (user_id, page_identifier)
       VALUES ($1, $2)`,
      [userId, pageIdentifier]
    )

    // soma o XP de forma segura **no banco**
    const xpToAdd = Number(XP_PER_PAGE)

    const updateResult = await query(
      `
      UPDATE users
      SET 
        xp = LEAST(xp + $1, $4),
        level = GREATEST(
          level,
          (FLOOR(((xp + $1)::numeric) / $2)::int) + 1
        )
      WHERE id = $3
      RETURNING xp, level;
      `,
      [xpToAdd, LEVEL_UP_BASE_XP, userId, MAX_REASONABLE_XP]
    )

    const { xp, level } = updateResult.rows[0]

    // Confere se subiu de level
    const expectedLevel = Math.floor(xp / LEVEL_UP_BASE_XP) + 1
    const leveledUp = expectedLevel > level ? true : false

    return res.status(200).json({
      message: leveledUp
        ? `Parabéns! Você subiu para o nível ${level}!`
        : `Você ganhou ${XP_PER_PAGE} XP!`,
      leveledUp,
      xp,
      level,
    })
  } catch (error) {
    console.error('Erro ao registrar progresso:', error)
    return res
      .status(500)
      .json({ message: 'Erro interno do servidor ao registrar progresso.' })
  }
})

export default router
