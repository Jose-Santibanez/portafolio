import Navbar from "../components/common/Navbar"
import Hero from "../components/sections/Hero"
import Habilidades from "../components/sections/Habilidades"
import Proyectos from "../components/sections/Proyectos"

const HomePages =()=>{

    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <Habilidades/>
                <Proyectos/>
            </main>
            
        </>
                        
    )



}

export default HomePages