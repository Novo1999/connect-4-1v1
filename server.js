import express from 'express'
import 'dotenv/config'
const port = process.env.PORT || 3000
import loginRouter from './routes/login.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

app.use('/api/v1', loginRouter)

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, console.log(`Server listening on port ${port}...`))
} catch (error) {
  console.log(error)
}
