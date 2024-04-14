import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { NEXON_OPEN_API_KEY = '', NEXON_OPEN_API_URI = '' } = process.env

axios.interceptors.request.use((config) => {
  config.headers.set('x-nxopen-api-key', NEXON_OPEN_API_KEY)
  config.baseURL = NEXON_OPEN_API_URI
  return config
})

export interface IOcidRes {
  ocid: string
}
export const getOcidByNickname = async (nickname: string) => {
  const response = await axios.get<IOcidRes>(`/id?character_name=${nickname}`)
  return response.data.ocid
}

export interface ICharacterRes {
  date: string
  character_class: string
  final_stat: { stat_name: string; stat_value: string }[]
}
export const getCharacterDetailByOcid = async (ocid: string) => {
  const response = await axios.get<ICharacterRes>(
    `/character/stat?ocid=${ocid}`
  )
  return response.data
}
