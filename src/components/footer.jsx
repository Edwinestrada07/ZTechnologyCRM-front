import React from 'react'

const Footer = () => {

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
        <footer>
            <div className="pt-16">
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p className="text-gray-600">© 2024 Edwin Estrada. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-x-3 text-gray-800 text-3xl mt-6">
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
        </footer>
    )
}

export default Footer
