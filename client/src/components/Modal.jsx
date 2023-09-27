import { useContext } from 'react'
import { PlayerContext } from '../App'
import { useGameLogic } from '../hooks/useGameLogic'

const Modal = () => {
  const { winner } = useContext(PlayerContext)
  const { resetAll } = useGameLogic()
  return (
    <div className='absolute z-10 w-[70rem] h-[40rem] bg-transparent flex flex-col justify-center items-center rounded-2xl'>
      <div className='bg-white w-96 h-96 flex flex-col justify-center items-center rounded-2xl'>
        <div>
          {winner === 1 ? (
            <p>Red Wins</p>
          ) : (
            <p className='text-4xl relative bottom-12 font-mono text-yellow-400 drop-shadow-xl'>
              Yellow Wins
            </p>
          )}
        </div>
        <button
          onClick={resetAll}
          className='bg-green-500 p-4 rounded-lg cursor-pointer hover:bg-green-300 transition-all duration-200'
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
export default Modal
