import { useAxios } from "../../hooks/useFetchData"

const Habilidades = () =>{
    const {data,loading,error} = useAxios('/habilidades')
    if(loading) return <p>Cargando Perfil</p>
    if(error) return <p>Error: {error}</p>
    return(
        <section className="skills-section">
            <h2>Habilidades</h2>
            <div className="skills-icons">
                
            </div>
        </section>
    )
}

export default Habilidades