import { useAxios } from "../../hooks/useFetchData"
import Habilidad from "../common/Habilidad"

 
const Habilidades = () =>{
    const {data:skills,loading,error} = useAxios('/habilidades')
    if(loading) return <p>Cargando Perfil</p>
    if(error) return <p>Error: {error}</p>
    
    return(
        <section className="skills-section">
            <h2>Habilidades</h2>
            <div className="skills-icons">
                
                {
                    skills.map((skill, index)=>(
                        <Habilidad props={skill} keys={index}/>))
                }
            </div>
        </section>
    )
}

export default Habilidades