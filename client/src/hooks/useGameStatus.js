import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getGameStatus = async (id) => {
  try {
    const data = await axios.get(`/api/v1/game-status/${id}`)
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
