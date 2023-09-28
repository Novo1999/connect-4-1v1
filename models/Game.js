import mongoose from 'mongoose'

const GameSchema = new mongoose.Schema({
  gameMove: Array,
  gameWinner: Number,
})

export default mongoose.model('Game', GameSchema)
