import { Router } from 'express'
import {
  createGame,
  deleteGame,
  getGameStatus,
  sendGameMove,
} from '../controllers/game.js'
import { validateIdParam } from '../middleware/validationMiddleware.js'
const router = Router()

router.route('/game-create').post(createGame)
router.route('/game-status/:id').get(validateIdParam, getGameStatus)
router.route('/game-update/:id').patch(validateIdParam, sendGameMove)
router.route('/game-delete/:id').delete(validateIdParam, deleteGame)

export default router
