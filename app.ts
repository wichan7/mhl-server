import express, { Request, Response } from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(path.resolve(), 'public')))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(path.resolve(), 'public/index.html'))
})

app.listen('3001', () => {
  console.log(`Server listen on 3001`)
})
