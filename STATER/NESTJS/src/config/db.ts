import { getSecret } from './getSecret'

type DbConfig = {
  username: string
  password: string
  engine: string
  host: string
  port: string
  dbname: string
}

export const dbConfig = async () => await getSecret<DbConfig>(process.env.DB_URI as string)

type DbReadConfig = {
  username: string
  password: string
  engine: string
  host: string
  port: string
  dbname: string
}

export const DbReadConfig = async () => await getSecret<DbReadConfig>(process.env.DB_READ_URI as string)
