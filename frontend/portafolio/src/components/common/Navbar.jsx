import { Link } from "react-router-dom"


const Navbar =( { onLoginClick })=>{
    
    
    return (
        
            <nav className="nav">
                <div className="nav-container">
                    <button className="nav-container-tab active"></button>
                    <button className="nav-container-tab" onClick={onLoginClick}>Login</button>
                </div>
            </nav>
        
    )


}

export default Navbar