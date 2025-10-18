import express from 'express'
import cors from 'cors'
import 'dotenv/config'
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json)
app.use(cors())

app.listen(3000, ()=>{
    console.log(`servidor encendido en el puerto ${PORT}`)
})