import { nxGet } from '../utils/httpClient.js'

export interface Id {
  ocid: string
}
export const getOcidByNickname = async (nickname: string) => {
  const data = await nxGet<Id>(`/id?character_name=${nickname}`)
  return data.ocid
}

export interface CharacterStat {
  date: string | null
  character_class: string
  final_stat: { stat_name: string; stat_value: string }[]
}
export const getCharacterDetailByOcid = async (ocid: string) => {
  const data = await nxGet<CharacterStat>(`/character/stat?ocid=${ocid}`)
  return data
}
