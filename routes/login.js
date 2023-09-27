import { Router } from 'express'
import { loginPlayer } from '../controllers/login.js'
import { validatePlayerName } from '../middleware/validationMiddleware.js'

const router = Router()

router.route('/login').post(validatePlayerName, loginPlayer)

export default router
