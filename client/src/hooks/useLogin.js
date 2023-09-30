import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const login = async (value) => {
  try {
    const response = await axios.post(
      'api/v1/login',
      {
        name: value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getPlayers = async () => {
  try {
    const response = await axios.get('api/v1/players')
    return response
  } catch (error) {
    console.log(error)
  }
}

export const useLogin = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['players'],
    queryFn: getPlayers,
  })
  return { data, isLoading }
}
