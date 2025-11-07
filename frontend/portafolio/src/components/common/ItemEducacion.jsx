
const ItemEducacion = ({props})=>{
    return(
        <div className="timeline-item reveal">
            <h3>{props.titulo} - {props.institucion}</h3>
            <span>{props.fecha_inicio} - {props.fecha_fin}</span>
            <p>{props.descripcion}</p>
        </div>
    )
}   

export default ItemEducacion 