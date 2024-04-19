import mongoose from 'mongoose'
import { CharacterStat } from '../services/nxOpenApiService'

interface Character extends CharacterStat {
  nickname: string
}
const characterSchema = new mongoose.Schema<Character>({
  nickname: { type: String, required: true },
  date: { type: String, required: false },
  character_class: { type: String, required: true },
  final_stat: { type: [], required: true },
})
characterSchema.set('timestamps', true)

export default mongoose.model('Character', characterSchema)
