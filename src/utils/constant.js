// initial columns
const col1 = [1, 8, 15, 22, 29, 36]
const col2 = col1.map(item => item + 1)
const col3 = col1.map(item => item + 2)
const col4 = col1.map(item => item + 3)
const col5 = col1.map(item => item + 4)
const col6 = col1.map(item => item + 5)
const col7 = col1.map(item => item + 6)

// creating the board
let connectFour = Array.from({ length: 42 }, (_, i) => i + 1).map(item => {
  return { colorNum: item, color: 'bg-slate-700' }
})

export { col1, col2, col3, col4, col5, col6, col7, connectFour }
