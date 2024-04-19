import express from 'express'
import characterService from '../services/characterService.js'

const router = express.Router()

router.get('/uid', () => {})
router.get('/ranks', () => {})
router.post('/ranks', () => {})
router.get('/characters/:nickname', async (req, res) => {
  const { nickname } = req.params
  if (!nickname) return res.send('400')

  const character = await characterService.getCharacterByNickname(nickname)

  return res.send(character)
})
router.post('/characters/:nickname', async (req, res) => {
  const { nickname } = req.params
  if (!nickname) return res.send('400')

  characterService.registerCharacterByNickname(nickname)

  return res.send('ok')
})

export default router
