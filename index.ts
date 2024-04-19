import express from 'express'
import dotenv from 'dotenv'
import mongodb from './src/configs/mongodb.js'
import route from './src/routes/index.js'

dotenv.config()
mongodb.config()

const APPLICATION_PORT = process.env.APPLICATION_PORT || 8001

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', route)

app.listen(APPLICATION_PORT, () => {
  console.log(`Server listen on port ${APPLICATION_PORT}`)
})
