import axios from 'axios'

const get = async <ResponseType>(url: string) => {
  const response = await axios.get<ResponseType>(url)
  return response.data
}
const post = async <ResponseType>(url: string) => {
  const response = await axios.post<ResponseType>(url)
  return response.data
}
const nxGet = async <ResponseType>(path: string) => {
  const response = await axios.get<ResponseType>(
    process.env.NEXON_OPEN_API_URI + path,
    {
      headers: {
        'x-nxopen-api-key': process.env.NEXON_OPEN_API_KEY,
      },
    }
  )
  return response.data
}
const nxPost = async <ResponseType>(path: string) => {
  const response = await axios.post<ResponseType>(
    process.env.NEXON_OPEN_API_URI + path,
    {
      headers: {
        'x-nxopen-api-key': process.env.NEXON_OPEN_API_KEY,
      },
    }
  )
  return response.data
}

export { get, post, nxGet, nxPost }
