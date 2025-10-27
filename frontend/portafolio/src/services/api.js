import axios from 'axios'

const API =  axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getUsuario = async (id) => {
    const {data} = await API.get(`/usuario/${id}`)
    console.log(data)
    return data
}
export const proyectos = async () => {
    const {data} = await API.get('/proyectos');
    return data
}

export const habilidaddes = async ()=>{
    const { data } = await API.get('/habilidades')
    return data
}

export const experiencias = async ()=>{
    const { data } = await API.get('/experiencias')
    return data
}

export const redes = async () => {
    const { data } = await API.get('/redes')
    return data
}

export const educacion = async () => {
    const { data } = await API.get('/educacion')
    return data
}