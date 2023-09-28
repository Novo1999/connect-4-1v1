import mongoose from 'mongoose'

const GameSchema = new mongoose.Schema({
  gameMove: Array,
  gameWinner: {
    type: Number,
    default: null,
  },
})

export default mongoose.model('Game', GameSchema)
