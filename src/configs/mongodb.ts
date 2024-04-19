import mongoose from 'mongoose'

export default {
  config: () => {
    const {
      MONGO_DB_URI = 'asd',
      MONGO_DB_AUTHSOURCE = 'admin',
      MONGO_DB_USERNAME = 'wichan',
      MONGO_DB_PASSWORD = 'wichan',
    } = process.env

    mongoose
      .connect(MONGO_DB_URI, {
        authSource: MONGO_DB_AUTHSOURCE,
        user: MONGO_DB_USERNAME,
        pass: MONGO_DB_PASSWORD,
      })
      .then(() => {
        console.log('mongodb has been connected just moment.')
      })
      .catch((ex) => {
        console.log(ex)
      })
  },
}
