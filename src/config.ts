import * as dotenv from 'dotenv'

dotenv.config()

export const CONFIG = {
    youtubeToken: process.env.YOUTUBE_TOKEN,
    youtubeApiHostName: process.env.YOUTUBE_API_HOSTNAME,
    youtubeApiPathName: process.env.YOUTUBE_API_PATHNAME,
    port: process.env.PORT ?? 4000,
    dbName: process.env.DB_NAME ?? 'sqlite::memory:',
    dbUserName: process.env.DB_USERNAME ?? '',
    dbPassword: process.env.DB_PASSWORD ?? '',
    dbHost: process.env.DB_HOST ?? 'localhost',
    dbDialect: process.env.DB_DIALECT ?? 'sqlite',
    dbPort: process.env.DB_PORT,
} as const
