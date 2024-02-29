import { Link, NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate(); 

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')

        navigate('/login')
    }

    return (


        <nav className="navbar navbar-expand-lg p-3 m-2 bg-transparent">
    
            <Link 
                className="navbar-brand text-light" 
                to="/"
            >
                Store
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav mx-auto">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link text-light ${ isActive ? 'active':'' }` }
                        to="/product"
                    >
                        Product
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link text-light ${ isActive ? 'active':'' }` }
                        to="/user"
                        
                    >
                        Users
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link text-light ${ isActive ? 'active':'' }` }
                        to="/client"
                        
                    >
                      Clients
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link text-light  ${ isActive ? 'active':'' }` }
                        to="/cart"
                        
                    >
                      Cart
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                
                    <span className="nav-item nav-link text-primary">
                        Cambiar nombre
                    </span> 
                    <button
                        className="nav-item nav-link btn text-light"
                        onClick={ logout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar 
