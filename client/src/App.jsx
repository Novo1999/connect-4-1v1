import { createContext, useState } from 'react'
import Scores from './components/Scores'
import Connect4 from './components/connect-4'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PlayerLogin from './playerLogin'

export const PlayerContext = createContext(null)

const queryClient = new QueryClient()

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [winner, setWinner] = useState(null)
  return (
    <QueryClientProvider client={queryClient}>
      <PlayerContext.Provider
        value={{ currentPlayer, winner, setWinner, setCurrentPlayer }}
      >
        <div className='bg-slate-700 h-screen overflow-hidden'>
          <PlayerLogin />
          <Scores />
          <Connect4 />
        </div>
      </PlayerContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App
