import mongoose from 'mongoose'

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  currentPlayers: {
    type: Number,
    default: 1,
  },
  maxWaiting: Number,
})

export default mongoose.model('Player', PlayerSchema)
