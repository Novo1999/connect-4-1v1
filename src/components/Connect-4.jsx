import { useState } from 'react'
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
  const [currentHoveredColumn, setCurrentHoveredColumn] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState(1)

  // creating new columns based on clicks
  const [column1, setColumn1] = useState([])
  const [column2, setColumn2] = useState([])
  const [column3, setColumn3] = useState([])
  const [column4, setColumn4] = useState([])
  const [column5, setColumn5] = useState([])
  const [column6, setColumn6] = useState([])
  const [column7, setColumn7] = useState([])

  const wholeConnectFour = [
    ...column1,
    ...column2,
    ...column3,
    ...column4,
    ...column5,
    ...column6,
    ...column7,
  ]

  function currentColumn(referenceColumn, newColumn, columnSetter) {
    referenceColumn.map(item => {
      if (!newColumn.map(el => el.colorNum).includes(item)) {
        const newColumnCopy = [...newColumn]
        newColumnCopy.push({
          colorNum: item,
          color: currentPlayer === 1 ? 'bg-red-600' : 'bg-yellow-600',
        })
        columnSetter(newColumnCopy)
      }
    })
  }

  function addCircleToColumn(currentHovered) {
    switch (currentPlayer) {
      case 1:
        setCurrentPlayer(2)
        break
      case 2:
        setCurrentPlayer(1)
        break
    }
    switch (currentHovered) {
      case 1:
        currentColumn(col1, column1, setColumn1)
        break
      case 2:
        currentColumn(col2, column2, setColumn2)
        break
      case 3:
        currentColumn(col3, column3, setColumn3)
        break
      case 4:
        currentColumn(col4, column4, setColumn4)
        break
      case 5:
        currentColumn(col5, column5, setColumn5)
        break
      case 6:
        currentColumn(col6, column6, setColumn6)
        break
      case 7:
        currentColumn(col7, column7, setColumn7)
    }
  }

  // FIX COLOR ISSUE

  let connectFour = Array.from({ length: 42 }, (_, i) => i + 1).map(item => {
    return { colorNum: item, color: 'bg-slate-700' }
  })

  // console.log(wholeConnectFour)

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
    <>
      <div className='bg-blue-500 rounded-xl w-[70rem] h-[40rem] m-auto relative top-40 bottom-0 p-3 grid grid-cols-7 grid-rows-6'>
        <HoverBox
          setCurrentHoveredColumn={setCurrentHoveredColumn}
          currentHoveredColumn={currentHoveredColumn}
          addCircleToColumn={addCircleToColumn}
          setCurrentPlayer={setCurrentPlayer}
          currentPlayer={currentPlayer}
        />
        {connectFour.map(item => {
          return (
            <div
              key={item.colorNum}
              className={`w-24 h-24 m-auto ${item.color}
                 rounded-full`}
            ></div>
          )
        })}
      </div>
    </>
  )
}
export default Connect4
