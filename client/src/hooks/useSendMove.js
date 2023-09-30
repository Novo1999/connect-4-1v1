import axios from 'axios'

export const sendGameMove = async (move, id) => {
  try {
    const data = await axios.patch(`/api/v1/game-update/${id}`, {
      gameMove: move,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
