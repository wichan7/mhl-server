import express from 'express'
import characterService from '../service/characterService.js'
import {
  getOcidByNickname,
  getCharacterDetailByOcid,
} from '../service-external/nxOpenApiService.js'

const router = express.Router()

router.get('/test/:nickname', async (req, res) => {
  const { nickname } = req.params
  if (!nickname) return res.send('failed')

  res.send(await getCharacterDetailByOcid(await getOcidByNickname(nickname)))
})

router.get('/uid', () => {})
router.get('/ranks', () => {})
router.post('/ranks', () => {})
router.get('/characters/:nickname', async (req, res) => {
  const { nickname } = req.params
  if (!nickname) return res.send('failed')

  const character = await characterService.getCharacterByNickname(nickname)

  return res.send(character)
})
router.post('/characters/:nickname', (req, res) => {
  const { nickname } = req.params
  if (!nickname) return res.send('failed')
})

export default router
