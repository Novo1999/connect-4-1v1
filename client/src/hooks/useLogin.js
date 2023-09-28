import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const login = async name => {
  const data = await axios.post(
    'api/v1/login',
    {
      name: name,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return data
}

export const useLogin = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['current-user'],
    queryFn: login,
  })

  return { data, isLoading }
}
