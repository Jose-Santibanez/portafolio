import { BrowserRouter, Routes, Route } from "react-router-dom";




//import { getUsuario } from './services/api.js'
import './App.css'
import HomePages from './pages/public/HomePages'
//import { useAxios } from './hooks/useFetchData.js'

function App() {
/* const {data:user, loading, error } = useAxios('/usuario/1') 

  if(loading) return <p>Cargando Perfil...</p>;
  if(error) return <p>Error: {error}</p> */


  return (
     <BrowserRouter > 
        <Routes>
            <Route path='/' element={<HomePages/>}></Route>
        </Routes>
     </BrowserRouter>
       
    )
}

export default App
