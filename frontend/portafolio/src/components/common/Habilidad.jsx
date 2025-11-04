
const Habilidad = ({props})=>{
    
    return(
        <div className="skill-icon reveal">
            <img src={props.imagen} alt={props.nombre} />
            <p>{props.nombre}</p>
        </div>
    )  
}

export default Habilidad