
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePages from './pages/HomePages'
import AdminPages from './pages/AdminPages'
import { useState } from 'react'
//import { getUsuario } from './services/api.js'
import './App.css'
//import { useAxios } from './hooks/useFetchData.js'

function App() {
/* const {data:user, loading, error } = useAxios('/usuario/1') 

  if(loading) return <p>Cargando Perfil...</p>;
  if(error) return <p>Error: {error}</p> */


  return (
     <BrowserRouter > 
        <Routes>
            <Route path='/' element={<AdminPages/>}></Route>
        </Routes>
     </BrowserRouter>
       
    )
}

export default App
