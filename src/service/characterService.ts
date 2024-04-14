import Character from '../model/character.js'

const getCharacterByNickname = async (nickname: string) => {
  return await Character.findOne({ nickname }).exec()
}

const registerCharacterByNickname = async (nickname: string) => {}

export default { getCharacterByNickname }
