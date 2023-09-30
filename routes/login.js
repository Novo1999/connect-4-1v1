import { Router } from 'express'
import { getPlayerStats, loginPlayer } from '../controllers/login.js'
import { validatePlayerName } from '../middleware/validationMiddleware.js'

const router = Router()

router.route('/login').post(validatePlayerName, loginPlayer)
router.route('/players').get(getPlayerStats)

export default router
