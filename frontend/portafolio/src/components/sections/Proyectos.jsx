import { useAxios } from "../../hooks/useFetchData"

const Proyectos =()=>{

    const {data: proyectos , loading, error }= useAxios('/proyectos');
    if (loading) return <p>Cargando Perfil</p>
    if (error) return <p>Error {error}</p>

    return(
        <section className="proyectos-section">
            <h2>Proyectos</h2>
            <div className="proyectos-grid">
                {proyectos.map()}
            </div>
        </section>
    )
    
}

export default Proyectos