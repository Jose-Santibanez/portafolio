import {useState, useRef } from 'react'

export const Login = ()=>{
    const [ form , seTForm ] = useState({
        email: "", 
        contraseña : ""})
    const [error, setErrors] = useState({});
    const [loading, setLoading ] = useState(false);

    const validate = ()=>{
        const e = {}
        if(!form.name.trim()) e.name = "ingresa Tu nombre";
        if(!form.email.trim()) e.email = "Ingresa tu correo";

        return e;
    }
    return (
      <dialog id='loginModal' className='modal'>
        <article className='modal-content'>

          <header className='modal-header'>
              <h2>Login</h2>
              <button className='close-btn' aria-label='Cerrar'>X</button>
          </header>
          
          <section className='modal-body'>
             <form className='login-form'>
                <div className='form-group'>
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email"
                         id="email"
                         placeholder='Ejemplo@ejemplo.cl'
                         required />                       
                </div>
                <div className='form-group'>
                  <label htmlFor="password">Contraseña</label>
                  <input type="password"
                         id="password"
                         placeholder='*******'
                         required />                 
                </div>

                <button type='submit' className='login-btn'>
                  Ingresar
                </button>
                
             </form>
          </section>
         
         <footer className='modal-footer'>
            <p>
               ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
            </p>
         </footer>
        </article>
        
      </dialog>
    ) 
}