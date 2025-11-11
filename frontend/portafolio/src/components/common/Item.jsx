import { useFormattedDate } from "../../hooks/useFormattedDate"

const Item = ({props}) =>{
    const fechaIncio = useFormattedDate(props.fecha_inicio)
    const fechafin = useFormattedDate(props.fecha_fin)
    return(
        <div className="timeline-item reveal">
            <h3>{props.cargo} - {props.empresa}</h3>
            <span>{fechaIncio} hasta  {fechafin}</span>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default Item