/* import { useForm } from "react-hook-form" */
import ReactDOM from 'react-dom'
import { useEffect } from 'react';

const modalRoot = document.getElementById('modal-root');
const Login = ({ onClose })=>{
const el = document.createElement('div');
useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);
    return ReactDOM.createPortal(
   <div className="modal-overlay" >
      <div 
        className="modal-content" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="login-modal-title"
      >
        <button 
          className="close-button" 
           
          aria-label="Cerrar ventana de inicio de sesión"
        >
          &times;
        </button>
        
        <h2 id="login-modal-title">Iniciar Sesión</h2>
        
        <form className="login-form">
          <input 
            className="input-field" 
            type="email" 
            placeholder="Correo Electrónico" 
            required
            aria-label="Correo Electrónico"
          />
          <input 
            className="input-field" 
            type="password" 
            placeholder="Contraseña" 
            required
            aria-label="Contraseña"
          />
          <button className="submit-button" type="submit">
            Acceder
          </button>
        </form>
      </div>
    </div>,
    el
  );
};

export default Login;