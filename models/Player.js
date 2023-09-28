import mongoose from 'mongoose'

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  currentPlayers: {
    type: Number,
    default: 1,
  },
  player: Number,
  maxPlayers: {
    type: Number,
    default: 2,
  },
})

export default mongoose.model('Player', PlayerSchema)
