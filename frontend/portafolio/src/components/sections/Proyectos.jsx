import { useAxios } from "../../hooks/useFetchData"
import CardProyecto from "../common/CardProyecto";

const Proyectos =()=>{

    const {data: projects , loading, error }= useAxios('/proyectos');
    if (loading) return <p>Cargando Perfil</p>
    if (error) return <p>Error {error}</p>

    return(
        <section className="project-section">
            <h2>Proyectos</h2>
            <div className="project-grid ">
                {projects.map((project, index)=>(
                    <CardProyecto props={project} keys={index}/>
                ))}
            </div>
        </section>
    )
    
}

export default Proyectos