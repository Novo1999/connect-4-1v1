import { useState } from 'react'
import { login, useLogin } from './hooks/useLogin'

const PlayerLogin = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [inputValue, setInputValue] = useState(null)
  const { data } = useLogin()
  console.log(data)

  return (
    !userLoggedIn && (
      <div className='h-screen absolute bg-slate-700 w-screen z-10 flex justify-center items-center flex-col'>
        <h1 className='text-white text-7xl relative bottom-12'>
          Connect-4 Online
        </h1>
        <form
          action='/api/v1/login'
          method='post'
          className='flex flex-col gap-4 items-center'
          onSubmit={e => {
            e.preventDefault()
            login(inputValue)
          }}
        >
          <label className='text-white text-3xl' htmlFor='login'>
            Your Name
          </label>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className='h-12 w-60 rounded-md pl-4'
            type='text'
          />
          <button
            className='bg-white p-4 rounded-lg hover:bg-black hover:text-white'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    )
  )
}
export default PlayerLogin
