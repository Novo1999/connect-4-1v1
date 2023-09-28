import 'express-async-errors'
import express from 'express'
import 'dotenv/config'
import loginRouter from './routes/login.js'
import gameRouter from './routes/game.js'
import mongoose from 'mongoose'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import { StatusCodes } from 'http-status-codes'
import morgan from 'morgan'
const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1', loginRouter)
app.use('/api/v1', gameRouter)

app.use('*', (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, console.log(`Server listening on port ${port}...`))
} catch (error) {
  console.log(error)
  process.exit(1)
}
