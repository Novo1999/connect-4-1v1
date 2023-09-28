import StatusCodes from 'http-status-codes'
import Game from '../models/Game.js'
import { BadRequestError } from '../errors/error-handler.js'

// post
export const createGame = async (req, res) => {
  const gameMove = await Game.create(req.body)
  res.status(StatusCodes.CREATED).json(gameMove)
}
// patch
export const sendGameMove = async (req, res) => {
  const id = req.params.id
  const updated = await Game.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  })
  if (!updated) throw new BadRequestError('Something went wrong.Try again')
  res.status(StatusCodes.OK).json({ gameMove: updated })
}
// get
export const getGameStatus = async (req, res) => {
  const game = await Game.findById(req.params.id)
  if (!game) throw new BadRequestError('Something went wrong.Try again')
  res.status(StatusCodes.OK).json(game)
}
// delete
export const deleteGame = async (req, res) => {
  const id = req.params.id
  const removed = await Game.findOneAndRemove(id)
  if (!removed) throw new BadRequestError('Something went wrong.Try again')
  res.status(StatusCodes.OK).json({ msg: 'Game deleted', gameMove: removed })
}
