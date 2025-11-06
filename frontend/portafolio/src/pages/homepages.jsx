import Navbar from "../components/common/Navbar"
import Hero from "../components/sections/Hero"
import Habilidades from "../components/sections/Habilidades"
import Proyectos from "../components/sections/Proyectos"

const HomePages =()=>{

    return (
        <>
            <Navbar/>
            <Hero/>
            <main>                
                <Habilidades/>
                <Proyectos/>
            </main>
            
        </>
                        
    )



}

export default HomePages