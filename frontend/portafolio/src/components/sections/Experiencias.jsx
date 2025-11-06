import { useAxios } from "../../hooks/useFetchData"


const Experiencias = () =>{

    const {data:experiences, loading, error} = useAxios('/experiencias');
    
    if(loading) return <p>{loading}</p>
    if(error) return <p>Error : {error}</p>

    return(
        <section className="experience-section">
            <h2>Experiencia</h2>
            <div className="timeline">
               {/*  {experiences.map()} */}
            </div>
        </section>
    )
}

export default Experiencias