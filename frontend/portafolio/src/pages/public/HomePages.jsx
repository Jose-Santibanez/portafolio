import Navbar from "../../components/common/Navbar"
import Hero from "../../components/sections/Hero"
import Habilidades from "../../components/sections/Habilidades"
import Proyectos from "../../components/sections/Proyectos"
import Experiencias from "../../components/sections/Experiencias"
import Educacion from "../../components/sections/Educacion"
import Contacto from "../../components/sections/Contacto"
import Footer from "../../components/common/Footer"

const HomePages =()=>{

    return (
        <>
           
            
            <Hero/>
                <main>                
                    <Habilidades/>
                    <Proyectos/>
                    <Experiencias/>
                    <Educacion/>
                </main>
             <Contacto/>
            <Footer/>
            
        </>
                        
    )



}

export default HomePages