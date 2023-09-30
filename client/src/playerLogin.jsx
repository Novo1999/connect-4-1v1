import { useEffect, useState } from 'react'
import { login, useLogin } from './hooks/useLogin'
import { useQueryClient } from '@tanstack/react-query'
import { useCreateGame } from './hooks/useCreateGame'

const PlayerLogin = () => {
  const [usersLoggedIn, setUsersLoggedIn] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { data, isLoading } = useLogin()
  const { mutation, gameId } = useCreateGame()

  const queryClient = useQueryClient()
  useEffect(() => {
    if (data?.data.length === 2) {
      setUsersLoggedIn(true)
    } else setUsersLoggedIn(false)
  }, [data])

  return (
    !usersLoggedIn && (
      <div className='h-screen absolute bg-slate-700 w-screen z-10 flex justify-center items-center flex-col'>
        <h1 className='text-white text-7xl relative bottom-12'>
          Connect-4 Online
        </h1>
        <form
          action='/api/v1/login'
          method='post'
          className='flex flex-col gap-4 items-center'
          onSubmit={(e) => {
            e.preventDefault()
            login(inputValue)
            setInputValue('')
            queryClient.invalidateQueries({ queryKey: ['players'] })
            mutation.mutate()
          }}
        >
          <label className='text-white text-3xl' htmlFor='login'>
            Your Name
          </label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='h-12 w-60 rounded-md pl-4'
            type='text'
          />
          <button
            className='bg-white p-4 rounded-lg hover:bg-black hover:text-white'
            type='submit'
          >
            {isLoading ? 'Please wait...' : 'Start'}
          </button>
          <p className='text-white font-semibold text-2xl'>
            {data?.data?.length === 0
              ? 'Waiting for 2 players'
              : data?.data?.length === 1 && 'Waiting for 1 more player'}
          </p>
        </form>
      </div>
    )
  )
}
export default PlayerLogin
