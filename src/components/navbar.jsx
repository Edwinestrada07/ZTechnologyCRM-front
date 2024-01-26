import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')

        navigate('/login')
    }

    return (
        // <nav>
        //     <Link to='/'>Home</Link><br />
        //     <Link to='/Client'>Client</Link><br />
        //     <Link to='/User'>User</Link><br />
        //     <Link to='/Product'>Product</Link><br />
        //     <Link onClick={logout}>Cerrar Sesión</Link>
        // </nav>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                    
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Store
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/product"
                    >
                        Product
                    </NavLink>

                    {/* <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/cart"
                    >
                        Cart
                    </NavLink> */}
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/user"
                        
                    >
                        Users
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/client"
                        
                    >
                      Clients
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
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
                        className="nav-item nav-link btn"
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
