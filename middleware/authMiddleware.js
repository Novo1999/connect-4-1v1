import { UnauthenticatedError } from '../errors/error-handler.js'
import { verifyJWT } from '../utils/tokenUtils.js'

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies
  if (!token) throw new UnauthenticatedError('authentication invalid')

  try {
    const { userId } = verifyJWT(token)
    req.user = userId
    next()
  } catch (error) {
    if (!token) throw new UnauthenticatedError('authentication invalid')
  }
}
