import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRouter from './routes/userRoute.js'
import {pool} from './database/connection.js'

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json)
app.use(cors())

app.use('/users',userRouter)

app.listen(3000, ()=>{
    console.log(`servidor encendido en el puerto ${PORT}`)
})