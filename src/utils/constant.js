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

// win conditions lel

// Row Wins
const rowWin1 = [1, 2, 3, 4]
const rowWin2 = [2, 3, 4, 5]
const rowWin3 = [3, 4, 5, 6]
const rowWin4 = [4, 5, 6, 7]
const rowWin5 = [1, 2, 3, 4].map(num => num + 7)
const rowWin6 = [2, 3, 4, 5].map(num => num + 7)
const rowWin7 = [3, 4, 5, 6].map(num => num + 7)
const rowWin8 = [4, 5, 6, 7].map(num => num + 7)
const rowWin9 = [1, 2, 3, 4].map(num => num + 14)
const rowWin10 = [2, 3, 4, 5].map(num => num + 14)
const rowWin11 = [3, 4, 5, 6].map(num => num + 14)
const rowWin12 = [4, 5, 6, 7].map(num => num + 14)
const rowWin13 = [1, 2, 3, 4].map(num => num + 21)
const rowWin14 = [2, 3, 4, 5].map(num => num + 21)
const rowWin15 = [3, 4, 5, 6].map(num => num + 21)
const rowWin16 = [4, 5, 6, 7].map(num => num + 21)
const rowWin17 = [1, 2, 3, 4].map(num => num + 28)
const rowWin18 = [2, 3, 4, 5].map(num => num + 28)
const rowWin19 = [3, 4, 5, 6].map(num => num + 28)
const rowWin20 = [4, 5, 6, 7].map(num => num + 28)
const rowWin21 = [1, 2, 3, 4].map(num => num + 35)
const rowWin22 = [2, 3, 4, 5].map(num => num + 35)
const rowWin23 = [3, 4, 5, 6].map(num => num + 35)
const rowWin24 = [4, 5, 6, 7].map(num => num + 35)

export {
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
  connectFour,
}

/*
Row wins
[1,2,3,4] --> add 7,14,21,28,35 with each
[2,3,4,5] --> add 7,14,21,28,35 with each
[3,4,5,6] --> add 7,14,21,28,35 with each
[4,5,6,7] --> add 7,14,21,28,35 with each

*/

/*
Diagonal

*/
