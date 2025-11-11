import { useFormattedDate } from "../../hooks/useFormattedDate"

const ItemEducacion = ({props})=>{

    const fechaInicio = useFormattedDate(props.fecha_inicio);
    const fechaFin = useFormattedDate(props.fecha_fin)

    return(
        <div className="timeline-item reveal">
            <h3>{props.titulo} - {props.institucion}</h3>
            <span>{fechaInicio} hasta {fechaFin}</span>
            <p>{props.descripcion}</p>
        </div>
    )
}   

export default ItemEducacion 