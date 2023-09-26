import { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../App'
import { col1, col2, col3, col4, col5, col6, col7 } from '../utils/constant'

export function useColumns() {
  const { currentPlayer, setCurrentPlayer, winner, setWinner } =
    useContext(PlayerContext)
  const [currentHoveredColumn, setCurrentHoveredColumn] = useState(null)
  const [currentHoverColor, setCurrentHoverColor] = useState('hover:bg-red-600')
  const [currentFilledColumns, setCurrentFilledColumns] = useState([])

  const [totalColor, setTotalColor] = useState({ red: 0, yellow: 0 })

  // filling the columns based on clicks
  const [column1, setColumn1] = useState([])
  const [column2, setColumn2] = useState([])
  const [column3, setColumn3] = useState([])
  const [column4, setColumn4] = useState([])
  const [column5, setColumn5] = useState([])
  const [column6, setColumn6] = useState([])
  const [column7, setColumn7] = useState([])

  // All columns combined
  const wholeConnectFour = [
    ...column1,
    ...column2,
    ...column3,
    ...column4,
    ...column5,
    ...column6,
    ...column7,
  ]
  console.log(wholeConnectFour)
  // adding which column is full
  function addToCurrentFilledColumns(columnNum) {
    if (columnNumCounts[columnNum] === 5) {
      const copy = [...currentFilledColumns]
      copy.push(columnNum)
      setCurrentFilledColumns(copy)
    }
  }

  // tracks which column is full
  const columnNumCounts = wholeConnectFour.reduce((counts, item) => {
    const { columnNum } = item
    counts[columnNum] = (counts[columnNum] || 0) + 1
    return counts
  }, {})

  // check if any column already full

  function currentColumn(referenceColumn, newColumn, columnSetter) {
    referenceColumn.map(item => {
      if (!newColumn.map(el => el.colorNum).includes(item)) {
        const newColumnCopy = [...newColumn]
        newColumnCopy.push({
          columnNum: currentHoveredColumn,
          colorNum: item,
          color: currentPlayer === 1 ? 'bg-red-600' : 'bg-yellow-600',
        })
        columnSetter(newColumnCopy)
      }
    })
  }

  // determining the winner
  useEffect(() => {
    if (totalColor.red === 4) {
      setWinner('red')
    }
    if (totalColor.yellow === 4) {
      setWinner('yellow')
    }
  }, [setWinner, totalColor])

  // counting how many colors in the columns are same
  useEffect(() => {
    function totalColorCounter(currentHovered, column) {
      if (currentHoveredColumn === currentHovered) {
        column.reduce(
          (counts, item) => {
            const { color } = item
            if (color === 'bg-red-600') {
              counts.red += 1
            }
            if (color === 'bg-yellow-600') {
              counts.yellow += 1
            }
            setTotalColor(counts)
            return counts
          },
          { red: 0, yellow: 0 }
        )
      }
    }
    totalColorCounter(1, column1)
    totalColorCounter(2, column2)
    totalColorCounter(3, column3)
    totalColorCounter(4, column4)
    totalColorCounter(5, column5)
    totalColorCounter(6, column6)
    totalColorCounter(7, column7)
  }, [
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    currentHoveredColumn,
  ])

  // changing color when current player switches
  useEffect(() => {
    if (currentPlayer === 1) {
      setCurrentHoverColor('hover:bg-red-600')
    }
    if (currentPlayer === 2) {
      setCurrentHoverColor('hover:bg-yellow-600')
    }
  }, [currentPlayer])

  // circle adding functionality
  function addCircleToColumn(currentHovered) {
    // checking if a column is already filled
    addToCurrentFilledColumns(1)
    addToCurrentFilledColumns(2)
    addToCurrentFilledColumns(3)
    addToCurrentFilledColumns(4)
    addToCurrentFilledColumns(5)
    addToCurrentFilledColumns(6)
    addToCurrentFilledColumns(7)

    // preventing player change when a column is full but user still clicks on it

    if (
      currentPlayer === 1 &&
      !currentFilledColumns.includes(currentHoveredColumn)
    ) {
      setCurrentPlayer(2)
    }
    if (
      currentPlayer === 2 &&
      !currentFilledColumns.includes(currentHoveredColumn)
    ) {
      setCurrentPlayer(1)
    }
    // filling the columns
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

  return {
    currentHoveredColumn,
    setCurrentHoverColor,
    setCurrentHoveredColumn,
    currentHoverColor,
    addCircleToColumn,
    wholeConnectFour,
  }
}
