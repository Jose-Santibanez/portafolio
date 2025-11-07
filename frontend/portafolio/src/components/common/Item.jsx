
const Item = ({props}) =>{

    return(
        <div className="timeline-item reveal">
            <h3>{props.cargo} - {props.empresa}</h3>
            <span>{props.fecha_inicio} - {props.fecha_fin}</span>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default Item