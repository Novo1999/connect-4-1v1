import { useGameLogic } from '../hooks/useGameLogic'

const HoverBox = ({
  setCurrentHoveredColumn,
  addCircleToColumn,
  currentHoveredColumn,
  currentHoverColor,
  setCurrentHoverColor,
}) => {
  return (
    <div className='h-26 grid grid-cols-7 w-[70rem] absolute top-[-7rem]'>
      {Array.from({ length: 7 }, (_, i) => i).map(item => (
        <div
          key={item}
          className={`w-24 h-24 hover-ball ${currentHoverColor}
            rounded-full cursor-pointer m-auto relative ${
              item === 6 && 'right-4'
            } ${item === 5 && 'right-3'} ${item === 4 && 'right-2'} ${
            item === 1 && 'left-1'
          } ${item === 0 && 'left-2'}`}
          onMouseEnter={() => setCurrentHoveredColumn(item + 1)}
          // onMouseLeave={() => setCurrentHoveredColumn(null)}
          onClick={() => {
            addCircleToColumn(currentHoveredColumn)
          }}
        ></div>
      ))}
    </div>
  )
}
export default HoverBox
