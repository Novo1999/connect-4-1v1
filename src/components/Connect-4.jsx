import { useContext } from 'react'
import HoverBox from './HoverBox'
import { PlayerContext } from '../App'
import Modal from './Modal'
import { useGameLogic } from '../hooks/useGameLogic'

const Connect4 = () => {
  const { currentPlayer, winner } = useContext(PlayerContext)
  const {
    currentHoveredColumn,
    setCurrentHoverColor,
    setCurrentHoveredColumn,
    currentHoverColor,
    addCircleToColumn,
    wholeConnectFour,
    connectFour,
  } = useGameLogic()

  // dynamically creating the circles in the connect four
  connectFour.map(item1 => {
    const match = wholeConnectFour.find(
      item2 => item2.colorNum === item1.colorNum
    )
    if (match) {
      item1.color = match.color
    }
  })

  // console.log(connectFour)

  return (
    <div className='relative flex items-center justify-center'>
      {winner && <Modal />}
      <div className='bg-blue-500 rounded-xl w-fit h-fit xl:w-[70rem] xl:h-[40rem] m-auto relative top-40 bottom-0 p-3 grid grid-cols-7 grid-rows-6'>
        <HoverBox
          setCurrentHoveredColumn={setCurrentHoveredColumn}
          currentHoveredColumn={currentHoveredColumn}
          addCircleToColumn={addCircleToColumn}
          currentHoverColor={currentHoverColor}
          setCurrentHoverColor={setCurrentHoverColor}
          currentPlayer={currentPlayer}
        />
        {connectFour.map(item => {
          return (
            <div
              key={item.colorNum}
              className={`xl:w-24 xl:h-24 w-12 h-12 xl:m-auto m-1 ${item.color}
                 rounded-full`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
export default Connect4
