import express, { Request, Response } from 'express'

const app = express()

app.listen('3001', () => {
  console.log(`Server listen on 3001`)
})
