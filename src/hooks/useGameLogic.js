import { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../App'
import {
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  rowWin1,
  rowWin2,
  rowWin3,
  rowWin4,
  rowWin5,
  rowWin6,
  rowWin7,
  rowWin8,
  rowWin9,
  rowWin10,
  rowWin11,
  rowWin12,
  rowWin13,
  rowWin14,
  rowWin15,
  rowWin16,
  rowWin17,
  rowWin18,
  rowWin19,
  rowWin20,
  rowWin21,
  rowWin22,
  rowWin23,
  rowWin24,
  diagonalWin1,
  diagonalWin2,
  diagonalWin3,
  diagonalWin4,
  diagonalWin5,
  diagonalWin6,
  diagonalWin7,
  diagonalWin8,
  diagonalWin9,
  diagonalWin10,
  diagonalWin11,
  diagonalWin12,
  diagonalWin13,
  diagonalWin14,
  diagonalWin15,
  diagonalWin16,
  diagonalWin17,
  diagonalWin18,
  diagonalWin19,
  diagonalWin20,
  diagonalWin21,
  diagonalWin22,
  diagonalWin23,
  diagonalWin24,
} from '../utils/constant'

export function useGameLogic() {
  const { currentPlayer, setCurrentPlayer, winner, setWinner } =
    useContext(PlayerContext)
  const [currentHoveredColumn, setCurrentHoveredColumn] = useState(null)
  const [currentHoverColor, setCurrentHoverColor] = useState('hover:bg-red-600')
  const [currentFilledColumns, setCurrentFilledColumns] = useState([])

  const [totalColor, setTotalColor] = useState({ red: 0, yellow: 0 })

  // creating the board
  let connectFour = Array.from({ length: 42 }, (_, i) => i + 1).map(item => {
    return { colorNum: item, color: 'bg-slate-700' }
  })

  // filling the columns based on clicks
  const [column1, setColumn1] = useState([])
  const [column2, setColumn2] = useState([])
  const [column3, setColumn3] = useState([])
  const [column4, setColumn4] = useState([])
  const [column5, setColumn5] = useState([])
  const [column6, setColumn6] = useState([])
  const [column7, setColumn7] = useState([])

  // All columns combined
  let wholeConnectFour = [
    ...column1,
    ...column2,
    ...column3,
    ...column4,
    ...column5,
    ...column6,
    ...column7,
  ]

  function areAllItemsSame(arr) {
    const firstItem = arr[0]

    if (arr.length === 0 || arr.length === 1) return false

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== firstItem) {
        return false
      }
    }
    setWinner(currentPlayer === 2 ? 1 : 2)
  }

  // checking row wins
  useEffect(() => {
    function checkWins(row) {
      let matchedRow
      const matched = row.every(num =>
        wholeConnectFour.some(item => item.colorNum === num)
      )
      if (matched) {
        matchedRow = row.map(num => {
          const match = wholeConnectFour.find(obj => obj.colorNum === num)
          return match ? match.color : null
        })
      }
      return areAllItemsSame(matchedRow || [])
    }
    checkWins(rowWin1)
    checkWins(rowWin2)
    checkWins(rowWin3)
    checkWins(rowWin4)
    checkWins(rowWin5)
    checkWins(rowWin6)
    checkWins(rowWin7)
    checkWins(rowWin8)
    checkWins(rowWin9)
    checkWins(rowWin10)
    checkWins(rowWin11)
    checkWins(rowWin12)
    checkWins(rowWin13)
    checkWins(rowWin14)
    checkWins(rowWin15)
    checkWins(rowWin16)
    checkWins(rowWin17)
    checkWins(rowWin18)
    checkWins(rowWin19)
    checkWins(rowWin20)
    checkWins(rowWin21)
    checkWins(rowWin22)
    checkWins(rowWin23)
    checkWins(rowWin24)
    checkWins(diagonalWin1)
    checkWins(diagonalWin2)
    checkWins(diagonalWin3)
    checkWins(diagonalWin4)
    checkWins(diagonalWin5)
    checkWins(diagonalWin6)
    checkWins(diagonalWin7)
    checkWins(diagonalWin8)
    checkWins(diagonalWin9)
    checkWins(diagonalWin10)
    checkWins(diagonalWin11)
    checkWins(diagonalWin12)
    checkWins(diagonalWin13)
    checkWins(diagonalWin14)
    checkWins(diagonalWin15)
    checkWins(diagonalWin16)
    checkWins(diagonalWin17)
    checkWins(diagonalWin18)
    checkWins(diagonalWin19)
    checkWins(diagonalWin20)
    checkWins(diagonalWin21)
    checkWins(diagonalWin22)
    checkWins(diagonalWin23)
    checkWins(diagonalWin24)
  }, [currentPlayer, setWinner])

  // const result = rowWin21.every(val => colorNums.includes(val))

  console.log(winner)

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
      setWinner(1)
    }
    if (totalColor.yellow === 4) {
      setWinner(2)
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
      if (winner) return
      setCurrentPlayer(2)
    }
    if (
      currentPlayer === 2 &&
      !currentFilledColumns.includes(currentHoveredColumn)
    ) {
      if (winner) return
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

  // fix reset
  function resetAll() {
    setColumn1([])
    setColumn2([])
    setColumn3([])
    setColumn4([])
    setColumn5([])
    setColumn6([])
    setColumn7([])
    setWinner(null)
    connectFour = []
  }

  console.log(connectFour)

  return {
    currentHoveredColumn,
    setCurrentHoverColor,
    setCurrentHoveredColumn,
    currentHoverColor,
    addCircleToColumn,
    wholeConnectFour,
    resetAll,
    connectFour,
  }
}
