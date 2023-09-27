import { Router } from 'express'
import { loginPlayer } from '../controllers/login.js'

const router = Router()

router.route('/login').post(loginPlayer)

export default router
