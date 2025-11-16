import 'dotenv/config';
import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) =>{
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token)
    if(!token){
        return res.status(400).json({message: 'token no encontrado'})
    }

    try{
        const tokenDecodificado = jwt.decode(token)
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.token = token;
        req.user = payload;
        next()
    }catch(e){
        console.log(e);
        return res.status(401).send({e : 'token invalido'})
    }
}