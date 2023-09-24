import { useEffect, useState } from 'react'
import HoverBox from './HoverBox'

// column
const col1 = [1, 8, 15, 22, 29, 36]
const col2 = col1.map(item => item + 1)
const col3 = col1.map(item => item + 2)
const col4 = col1.map(item => item + 3)
const col5 = col1.map(item => item + 4)
const col6 = col1.map(item => item + 5)
const col7 = col1.map(item => item + 6)

const Connect4 = () => {
  const [clickedCircles, setClickedCircles] = useState([])

  function addToClickedCircles(currentCircle) {
    const array = [...clickedCircles]

    if (array.includes(currentCircle)) return

    array.push(currentCircle)

    setClickedCircles(array)
  }

  console.log(clickedCircles)

  return (
    <>
      <div className='bg-blue-500 rounded-xl w-[70rem] h-[40rem] m-auto relative top-40 bottom-0 p-3 grid grid-cols-7 grid-rows-6'>
        <HoverBox />
        {Array.from({ length: 42 }, (_, i) => i + 1).map(item => (
          <div
            key={item}
            className={`w-24 h-24 m-auto bg-slate-700 rounded-full cursor-pointer ${
              clickedCircles.includes(item) ? 'bg-red-500' : ''
            }`}
            onClick={() => addToClickedCircles(item)}
          ></div>
        ))}
      </div>
    </>
  )
}
export default Connect4
