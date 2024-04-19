import Character from '../models/character.js'
import {
  getCharacterDetailByOcid,
  getOcidByNickname,
} from './nxOpenApiService.js'

const getCharacterByNickname = async (nickname: string) => {
  return await Character.findOne({ nickname }, null, {
    sort: { timestamp: -1 },
  }).exec()
}

const registerCharacterByNickname = async (nickname: string) => {
  const ocid = await getOcidByNickname(nickname)
  if (!ocid) throw new Error('400')
  const character = await getCharacterDetailByOcid(ocid)
  if (!character) throw new Error('400')

  Character.insertMany({ nickname, ...character })
}

export default { getCharacterByNickname, registerCharacterByNickname }
