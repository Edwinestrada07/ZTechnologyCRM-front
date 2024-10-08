import React from 'react'

const Footer = () => {

    const footerNavs = [
        { title: "Inicio", path: "/" },
        { title: "Productos", path: "/product" },
        { title: "Usuarios", path: "/user" },
        { title: "Clientes", path: "/client" },
        { title: "Cotizaciones", path: "/quote" },
    ]

    const socialInfo = [
        {
            icon: <i className="fab fa-github"></i>,
            href: "https://github.com/Edwinestrada07"
        },
        {
            icon: <i className="fab fa-linkedin"></i>,
            href: "https://www.linkedin.com/in/edwinestradam/"
        },
    ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 mt-16">
            {/* Logo y descripción */}
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img
                    src="./assets/png/logo_navx.png"
                    alt="Logo_CMR"
                    className="w-64 sm:mx-auto"
                />
                <p className="leading-relaxed mt-2 text-[13px]">
                    La herramienta ideal para pequeñas y medianas empresas que buscan una solución integral 
                    para gestionar sus operaciones diarias. La aplicación no solo mejora la eficiencia interna, sino que 
                    también eleva la experiencia del usuario y maximiza las oportunidades de venta.
                </p>
            </div>

            {/* Navegación de enlaces */}
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {footerNavs.map((item, idx) => (
                    <li key={idx} className="hover:text-gray-800">
                        <a href={item.path}>{item.title}</a>
                    </li>
                ))}
            </ul>
            
            {/* iconos redes */}
            <div className="flex items-center justify-center gap-x-3 text-gray-800 text-3xl mt-6 ">
                {
                    socialInfo.map((item, idx) => (
                        <a key={idx} href={item.href} aria-label="social media" target="_blank" rel="noreferrer">
                            {item.icon}
                        </a>
                    ))
                }
            </div>
            <p className="text-gray-600 text-center">© 2024 Edwin Estrada. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer