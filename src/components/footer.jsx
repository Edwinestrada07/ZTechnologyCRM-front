import React from 'react'
import { FaGithub, FaLinkedin, FaPortrait } from "react-icons/fa"

const Footer = () => {

    const footerNavs = [
        { title: "Inicio", path: "/" },
        { information: "Información", path: "#information" },
        { testim: "Testimonios", path: "#testim" }
    ]

    const socialInfo = [
        {
            icon: <FaLinkedin className="w-8 h-8" />,
            href: "https://www.linkedin.com/in/edwinestradam/"
        },
        {
            icon: <FaGithub className="w-8 h-8" />,
            href: "https://github.com/Edwinestrada07"
        },
        {
            icon: <FaPortrait className="w-8 h-8" />,
            href: "https://portafolioedwinestrada.netlify.app/"
        }
    ]

    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        <img
                            src="./assets/png/logo_navx.png"
                            alt="Logo_CMR"
                            className="w-64 sm:mx-auto"
                        />
                    </div>
                    {/* Navegación de enlaces */}
                    <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                        {footerNavs.map((item, idx) => (
                            <li key={idx} className="hover:text-gray-800">
                                <a href={item.path}>{item.title}</a>
                                <a href={item.path}>{item.information}</a>
                                <a href={item.path}>{item.testim}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
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
                    </div>
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p className="text-gray-600 text-center">© 2024 Edwin Estrada. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer