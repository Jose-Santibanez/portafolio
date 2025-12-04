import { Routes, Route } from "react-router-dom";
import { useState } from "react";



//import { getUsuario } from './services/api.js'
import './App.css'
import HomePages from './pages/public/HomePages'
import { Login } from "./pages/public/login";
import Navbar from "./components/common/Navbar";
//import { useAxios } from './hooks/useFetchData.js'

function App() {

    const [ open , setOpen ] = useState(false);

/* const {data:user, loading, error } = useAxios('/usuario/1') 

  if(loading) return <p>Cargando Perfil...</p>;
  if(error) return <p>Error: {error}</p> */


  return (
        <>
        <Navbar onLoginClick={()=>setOpen(true)}/>
        {
            open && (
                {}
            )
        }
        <Routes>   
            <Route path='/' element={<HomePages/>}></Route>
        </Routes>
        </>
       
    )
}

export default App
