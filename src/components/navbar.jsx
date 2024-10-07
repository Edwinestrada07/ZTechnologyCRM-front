import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const [state, setState] = useState(false)
    
    const navigation = [
        { title: "Inicio", path: "/" },
        { title: "Productos", path: "/product" },
        { title: "Usuarios", path: "/user" },
        { title: "Clientes", path: "/client" },
        { title: "Cotizaciones", path: "/quote"}
    ]

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')

        navigate('/login')
    }

    return (
        <nav className="bg-gray-800 w-full border-b md:border-0 md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <img
                            src="https://www.floatui.com/logo.svg" 
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-200 text-2xl p-2.5"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <FontAwesomeIcon icon={faSliders} />
                                ) : (
                                    <FontAwesomeIcon icon={faSliders} />
                                )
                                }
                      </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-200 text-lg">
                                        <a href={item.path}>
                                            { item.title }
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="text-white space-x-5">
                    <NavLink 
                        className={ ({isActive}) => `${ isActive ? 'active':'' }` }
                        to="/profile"
                    >
                        <strong>Perfil</strong>
                    </NavLink> 
                    <button
                        className="mb-2 py-2 px-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
                        onClick={ logout }
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 
