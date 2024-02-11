import express from 'express'
import config from './config/'
import helmet from 'helmet'

config()

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())

// Routes

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running on port: ', process.env.SERVER_PORT)
})