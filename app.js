import express from "express";
import cors from "cors";
import 'dotenv/config'
import userRoute from './routes/user.Route.js'
import { userModel } from './models/userModel.js'

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.use(cors())

 app.use('/api',userRoute) 


app.listen(PORT, ()=>{
    console.log(`servidor encendido en el puerto ${PORT}`)
})

