import { useState } from 'react'
//import { getUsuario } from './services/api.js'
import './App.css'
import { useAxios } from './hooks/useFetchData.js'

function App() {
const {data:user, loading, error } = useAxios('/usuario/1') 

  if(loading) return <p>Cargando Perfil...</p>;
  if(error) return <p>Error: {error}</p>

console.log(user)
  
  return (
    <>
      <div>
     
      </div>
       
    </>
  )
}

export default App
