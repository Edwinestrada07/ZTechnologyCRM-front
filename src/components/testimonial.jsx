import React from "react";

// Configuración de los ítems del Marquee
const marqueeItems = [
    {
        avatar: "./assets/png/avatar_1.png",
        name: "Alex Wonderson",
        title: "Founder of Lyconf",
        quote: "Como propietario de una pequeña empresa, hacía de todo y mi carga de trabajo aumentaba. Con esta startup pude ahorrar tiempo para poder concentrarme en las cosas más importantes: mis clientes y mi familia."
    },
    {
        avatar: "./assets/png/avatar_2.png",
        name: "Karim Ahmed",
        title: "DevOps Engineer",
        quote: "El software de mi empresa ahora es fácil de usar, ahorra tiempo y dinero y es apreciado por muchos usuarios. ¡Un cliente ahorró $10 mil en el transcurso de 3 años y otro ahorra 8 horas por semana! Gracias a ZTechnology"
    },
    {
        avatar: "./assets/png/avatar_3.png",
        name: "Lysa Stian",
        title: "System Manager",
        quote: "Mi negocio estaba en una situación desesperada. No tenía idea de qué hacer y sentí que estaba perdiendo la esperanza. Luego encontré esta Startup y todo cambió. Me ayudó a crear ventas automatizadas."
    },
    {
        avatar: "./assets/png/avatar_4.png",
        name: "Angela Stian",
        title: "Product Designer",
        quote: "Un día, mi empresa estaba a punto de quebrar y no tenía idea de qué hacer. Encontré ZTechnology y me ayudó a retomar mi negocio. Ahora mi empresa está floreciendo y veo nuevas oportunidades."
    },
    {
        avatar: "./assets/png/avatar_5.png",
        name: "Jurica Koletic",
        title: "Founder of Let’s Code",
        quote: "En estos tiempos económicos difíciles, hacer negocios es difícil. Es difícil conseguir financiación y muchos empresarios luchan por mantener sus puertas abiertas. Pero cuando encontré esta startup, todo cambió."
    },
];

const Testimonial = () => {
    return (
        <>
            <style>
                {`
                @keyframes marquee {
                    100% { transform: translateX(-50%); }
                }
                `}
            </style>

            {/* Contenedor del Marquee con gradiente para suavizar los bordes */}
            <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl mt-16">
                        Vea lo que otros dicen sobre nosotros
                    </h2>
                    <p className="my-3 text-gray-600">
                        Escuche lo que los expertos de todo el mundo dicen sobre nosotros.
                    </p>
                </div>
            <div
                id="testim"
                className="mb-4 w-full overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                }}
            >
                {/* Flex container que contiene los items del Marquee */}
                <div
                    className="flex w-[200%] gap-4 pr-4"
                    style={{
                        animation: "marquee 20s linear infinite",
                    }}
                >
                    {/* Duplicamos los items del Marquee para que se repitan */}
                    {[0, 1].map((index) => (
                        <div className="flex flex-1 gap-2" key={index}>
                            {marqueeItems.map((item, idx) => (
                                <div className="flex-1" key={idx}>
                                    <div className="h-full max-w-xs rounded-xl bg-gray-200 dark:bg-gray-800 p-3 shadow-md">
                                        {/* Imagen del avatar */}
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={item.avatar}
                                                alt={`${item.name} avatar`}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                                    {item.name}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Cita o testimonio */}
                                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                                            "{item.quote}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Testimonial;

