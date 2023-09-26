import { useContext } from 'react'
import { PlayerContext } from '../App'

const Scores = () => {
  const { currentPlayer, winner } = useContext(PlayerContext)
  return (
    <div className='flex justify-center gap-40 relative top-10'>
      <h2
        className={`text-white font-semibold ${
          currentPlayer === 1 ? 'bg-red-600' : 'bg-black'
        } ${
          winner === 1 ? 'bg-red-600' : winner === 2 && 'bg-yellow-600'
        } p-4 rounded-lg`}
      >
        Player 1: <span>0</span>
      </h2>
      <h2
        className={`text-white font-semibold ${
          currentPlayer === 2 ? 'bg-yellow-600' : 'bg-black'
        } p-4 rounded-lg`}
      >
        Player 2: <span>0</span>
      </h2>
    </div>
  )
}
export default Scores
