import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('rol')

        navigate('/login')
    }

    return (
        <nav>
            <Link to='/'>Home</Link><br />
            <Link to='/Client'>Client</Link><br />
            <Link to='/Product'>Product</Link><br />
            
            <Link onClick={logout}>Cerrar Sesión</Link>
        </nav>
    )
}

export default Navbar  