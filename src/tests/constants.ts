import dotenv from 'dotenv'
dotenv.config({ quiet: true })

export const DEMO_NUMBER = process.env.DEMO_NUMBER ?? '**missing**'
