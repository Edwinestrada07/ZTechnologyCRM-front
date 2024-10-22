import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [state, setState] = useState(false); // Para manejar el menú responsivo
    const [loggedIn, setLoggedIn] = useState(false); // Estado para verificar autenticación
    const [showDashboard, setShowDashboard] = useState(false); // Controla el desplegado del Dashboard
    const dashboardRef = useRef(null);

    useEffect(() => {
        // Verificar si el token está presente
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }

        const handleClickOutside = (event) => {
            if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
                setShowDashboard(false); // Cierra el submenú si el clic fue fuera del mismo
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dashboardRef]);

    const navigation = [
        { title: "Inicio", path: "/" },
        { information: "Información", path: "#information" },
        { testim: "Testimonios", path: "#testim" }
    ];

    const dashboardItems = [
        { title: "Productos", path: "/product" },
        { title: "Usuarios", path: "/user" },
        { title: "Clientes", path: "/client" },
        { title: "Cotizaciones", path: "/quote" }
    ];

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setLoggedIn(false); // Cambiar estado de autenticación
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 w-full border-b md:border-0 sticky top-0 z-50">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img
                            src="./assets/png/logo_nav.png" 
                            width={250} 
                            height={100}
                            alt="logo_CMR"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-200 text-2xl p-2.5"
                            onClick={() => setState(!state)}>
                            <FontAwesomeIcon icon={faSliders} />
                        </button>
                    </div>
                </div>
                
                <div className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <li key={idx} className="text-gray-200 text-lg">
                                <a href={item.path}>
                                    { item.title }
                                </a>
                                <a href={item.path}>
                                    { item.information }
                                </a>
                                <a href={item.path}>
                                    { item.testim }
                                </a>
                            </li>
                        ))}

                        {/* Dashboard Option */}
                        {loggedIn && (
                            <li className="relative text-gray-200 text-lg">
                                <button onClick={() => setShowDashboard(!showDashboard)}>
                                    Dashboard
                                </button>
                                {/* Sub-navbar for Dashboard Items */}
                                {showDashboard && (
                                    <ul ref={dashboardRef} className="absolute mt-2 p-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black">
                                        {dashboardItems.map((item, idx) => (
                                            <li key={idx} className="text-gray-400">
                                                <NavLink to={item.path}>
                                                    {item.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )}

                        {/* Show login required message */}
                        {!loggedIn && (
                            <li className="text-gray-400 text-lg">
                                Dashboard
                            </li>
                        )}
                    </ul>
                </div>
                
                <div className="text-white space-x-5">
                    {loggedIn ? (
                        <>
                            <NavLink className={({ isActive }) => `${ isActive ? 'active' : '' }`} to="/profile">
                                <strong>Perfil</strong>
                            </NavLink> 
                            <button
                                className="mb-2 py-2 px-2 text-white bg-cyan-500 hover:bg-cyan-600 rounded-md shadow"
                                onClick={logout}>
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <button
                            to="/login"
                            onClick={() => navigate('/login')}
                            className="mb-2 py-2 px-2 text-white bg-cyan-500 hover:bg-cyan-600 rounded-md shadow">
                            Iniciar Sesión
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
