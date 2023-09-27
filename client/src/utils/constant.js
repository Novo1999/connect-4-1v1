// initial columns
const col1 = [1, 8, 15, 22, 29, 36]
const col2 = col1.map(item => item + 1)
const col3 = col1.map(item => item + 2)
const col4 = col1.map(item => item + 3)
const col5 = col1.map(item => item + 4)
const col6 = col1.map(item => item + 5)
const col7 = col1.map(item => item + 6)

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

// Diagonal Win
const diagonalWin1 = [4, 10, 16, 22]
const diagonalWin2 = [5, 11, 17, 23]
const diagonalWin3 = [11, 17, 23, 29]
const diagonalWin4 = [6, 12, 18, 24]
const diagonalWin5 = [12, 18, 24, 30]
const diagonalWin6 = [18, 24, 30, 36]
const diagonalWin7 = [7, 13, 19, 25]
const diagonalWin8 = [13, 19, 25, 31]
const diagonalWin9 = [19, 25, 31, 37]
const diagonalWin10 = [14, 20, 26, 32]
const diagonalWin11 = [20, 26, 32, 38]
const diagonalWin12 = [21, 27, 33, 39]
const diagonalWin13 = [15, 23, 31, 39]
const diagonalWin14 = [8, 16, 24, 32]
const diagonalWin15 = [16, 24, 32, 40]
const diagonalWin16 = [1, 9, 17, 25]
const diagonalWin17 = [9, 17, 25, 33]
const diagonalWin18 = [17, 25, 33, 41]
const diagonalWin19 = [2, 10, 18, 26]
const diagonalWin20 = [10, 18, 26, 34]
const diagonalWin21 = [18, 26, 34, 42]
const diagonalWin22 = [3, 11, 19, 27]
const diagonalWin23 = [11, 19, 27, 35]
const diagonalWin24 = [4, 12, 20, 28]

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
}

/*
Row wins
[1,2,3,4] --> add 7,14,21,28,35 with each
[2,3,4,5] --> add 7,14,21,28,35 with each
[3,4,5,6] --> add 7,14,21,28,35 with each
[4,5,6,7] --> add 7,14,21,28,35 with each


Diagonal
right to left
-------------
[4,10,16,22]
[5,11,17,23]
[11,17,23,29]
[6,12,18,24]
[12,18,24,30]
[18,24,30,36]
[7,13,19,25]
[13,19,25,31]
[19,25,31,37]
[14,20,26,32]
[20,26,32,38]
[21,27,33,39]

left to right
-------------
[15,23,31,39]
[8,16,24,32]
[16,24,32,40]
[1,9,17,25]
[9,17,25,33]
[17,25,33,41]
[2,10,18,26]
[10,18,26,34]
[18,26,34,42]
[3,11,19,27]
[11,19,27,35]
[4,12,20,28]
*/
