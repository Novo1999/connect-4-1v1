import Player from '../models/Player.js'
import { StatusCodes } from 'http-status-codes'

export async function loginPlayer(req, res) {
  const player = await Player.create(req.body)
  res.status(StatusCodes.OK).json({ player })
}
