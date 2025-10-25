import { networksModel } from "../models/networks.model.js"


const allNetworks = async(req,res)=>{
    try{
        const networks = await networksModel.findAllNetworks()
        if(!networks){
            return res.status(404).json({message: 'Networks not found'})
        }
        return res.status(200).json(networks)
    }catch(e){
        return res.status(500).json({message: 'Internal server error'})
    }
}


export const networksController = {allNetworks}