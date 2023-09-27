import { validationResult, body } from 'express-validator'
import { BadRequestError } from '../errors/error-handler.js'

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
