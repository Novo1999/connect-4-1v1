import { createContext, useState } from 'react'
import Scores from './components/Scores'
import Connect4 from './components/connect-4'

export const PlayerContext = createContext(null)

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [winner, setWinner] = useState(null)
  return (
    <PlayerContext.Provider
      value={{ currentPlayer, winner, setWinner, setCurrentPlayer }}
    >
      <div className='bg-slate-700 h-screen overflow-hidden'>
        <Scores />
        <Connect4 />
      </div>
    </PlayerContext.Provider>
  )
}
export default App
