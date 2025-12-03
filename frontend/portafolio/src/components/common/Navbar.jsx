import { Link } from "react-router-dom"


const Navbar =()=>{
    
    
    return (
        
            <nav className="nav">
                <div className="nav-container">
                    <button className="nav-container-tab active"></button>
                    <button className="nav-container-tab">
                    <Link to='/login' >Login</Link>
                    </button>
                </div>
            </nav>
        
    )


}

export default Navbar