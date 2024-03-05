import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const [showOptions, setShowOptions] = useState(false) 

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')

        navigate('/login')
    }

    const toggleOptions = () => {
        setShowOptions(!showOptions)
    }

    return (
        <div className='bg-dark'>
            <nav className="navbar navbar-dark navbar-expand-lg p-3">
    
                <Link 
                    className="navbar-brand navbar-text text-light" 
                    to="/"
                >
                    <strong>Inicio</strong>
                </Link>

                <button 
                    className="navbar-toggler navbar-expand m-2" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={toggleOptions}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${showOptions ? 'show' : ''} navbar-text`} id="navbarSupportedContent">

                    <div className="navbar-nav">

                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link text-light ${ isActive ? 'active':'' }` }
                            to="/product"
                        >
                            <strong>Productos</strong>
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link text-light ${ isActive ? 'active':'' }` }
                            to="/user"
                            
                        >
                            <strong>Usuarios</strong>
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link text-light ${ isActive ? 'active':'' }` }
                            to="/client"
                            
                        >
                        <strong>Clientes</strong>
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link text-light  ${ isActive ? 'active':'' }` }
                            to="/quote"
                            
                        >
                        <strong>Cotización</strong>
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                    
                        <span className="nav-item nav-link text-primary">
                            Cambiar nombre
                        </span> 
                        <button
                            className="nav-item nav-link btn"
                            onClick={ logout }
                        >
                            Cerrar Sesión
                        </button>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar 
