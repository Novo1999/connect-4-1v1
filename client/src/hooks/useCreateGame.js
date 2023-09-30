import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

export const createGame = async () => {
  try {
    const game = await axios.post('/api/v1/game-create', {
      gameWinner: null,
      gameMove: [],
    })
    return game
  } catch (error) {
    console.log(error)
  }
}

export const useCreateGame = () => {
  const [gameId, setGameId] = useState(null)
  const mutation = useMutation({
    mutationFn: createGame,
    onSuccess: (data) => setGameId(data.data._id),
  })
  return { mutation, gameId }
}
