
const CardProyecto = ({props}) =>{

    return(
        <div className="project-card">
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
            <a href="#" class="btn">Ver más</a>
        </div>
    )
}

export default CardProyecto