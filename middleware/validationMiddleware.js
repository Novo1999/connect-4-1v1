import { validationResult, body, param } from 'express-validator'
import { BadRequestError, NotFoundError } from '../errors/error-handler.js'
import mongoose from 'mongoose'
import Game from '../models/Game.js'

const withValidationErrors = validateValues => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(err => err.msg)
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validatePlayerName = withValidationErrors(
  body('name')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isLength({ min: 3 })
    .withMessage('Name should be at least 3 characters')
)

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidMongoId) throw new BadRequestError('invalid request')
    const game = await Game.findById(value)
    if (!game) throw new NotFoundError('Game server says no')
  }),
])
