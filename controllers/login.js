import { BadRequestError } from '../errors/error-handler.js'
import Player from '../models/Player.js'
import { StatusCodes } from 'http-status-codes'
import { createJWT } from '../utils/tokenUtils.js'

export const loginPlayer = async (req, res) => {
  // increasing current player count
  const latestPlayer = await Player.find().sort({ _id: -1 })

  const currentPlayers = latestPlayer[0]?.currentPlayers || 0

  const player = await Player.create({
    ...req.body,
    currentPlayers: currentPlayers + 1,
    player: currentPlayers + 1,
  })

  // no more than two players are allowed to log in

  // if (currentPlayers >= latestPlayer[0]?.maxPlayers)
  //   throw new BadRequestError('Lobby is full')

  const token = createJWT({ userId: player._id })

  const oneDay = 1000 * 60 * 60 * 24

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  })

  res.status(StatusCodes.CREATED).json({ player })
}
