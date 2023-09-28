import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getGameStatus = async () => {
  try {
    const data = await axios.get('api/v1/game-status/65158d087fddb958ebd1da7c')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const useGameStatus = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['game'],
    queryFn: getGameStatus,
  })

  return { data, isLoading }
}
