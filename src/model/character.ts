import mongoose from 'mongoose'

interface ICharacter {
  nickname: string
  ocid: string
  job: string
  combatPower: number
  timestamp: number
}

const characterSchema = new mongoose.Schema<ICharacter>({
  nickname: { type: String, required: true },
  ocid: { type: String, required: true },
  job: { type: String, required: true },
  combatPower: { type: Number, required: true },
  timestamp: { type: Number, required: true },
})

export default mongoose.model('Character', characterSchema)
