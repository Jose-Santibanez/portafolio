import { useAxios } from "../../hooks/useFetchData"
import ItemEducacion from "../common/ItemEducacion";


const Educacion = () => {
    const {data: Educaciones, loading, error}= useAxios('/educacion');

    if(loading) return <p>{loading}</p>
    if(error) return <p>Error: {error}</p>
    return(
        <div className="education-section">
            <h2>Educacion</h2>
            <div className="timeline">
                {Educaciones.map((educacion, index)=>(
                    <ItemEducacion props={educacion} keys={index}/>
                ))}
            </div>

        </div>
    )
}

export default Educacion