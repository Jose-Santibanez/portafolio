
const Contacto =() =>{
    return(
        <section className="contact-section">
            <h2>Contacto</h2>
            <form action=""className="contact-form">
                <div className="form-group">
                    <label>nombre</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Mensaje</label>
                    <textarea id="message" rows={4} required></textarea>
                </div>
                <button className="btn">Enviar</button>
            </form>
        </section>
    )
}

export default Contacto