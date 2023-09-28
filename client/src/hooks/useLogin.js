import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const login = async value => {
  try {
    const data = await axios.post(
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
    return data
  } catch (error) {
    console.log(error)
  }
}

export const useLogin = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['name'],
    queryFn: login,
  })

  return { data, isLoading }
}
