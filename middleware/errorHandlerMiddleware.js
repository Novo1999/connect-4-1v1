import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/error-handler.js'

const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  const msg = err.message || 'something went wrong,try again later'
  res.status(statusCode).json({ msg })
}

export default errorHandlerMiddleware
