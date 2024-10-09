import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const MagicCard = ({ title, description, hoverDescription, imageUrl, zIndex }) => {
    const [isHovered, setIsHovered] = useState(false); // Estado para controlar el hover
   
    // Animación del modal al hacer hover
    const modalAnimation = useSpring({
        transform: isHovered ? 'translateY(0%)' : 'translateY(100%)', // El modal se desplaza de abajo hacia arriba
        opacity: isHovered ? 1 : 0, // Control de la opacidad
        config: { tension: 300, friction: 100 }, // Control de la animación
    });

    return (
        <animated.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative rounded-2xl p-4 shadow-lg"
            style={{
                "--radius": "1rem",
                height: "435px", // Reducir altura
                width: "300px",  // Reducir anchura
                zIndex, // Z-index dinámico para superposición
            }}
        >
            {/* Fondo interno y estructura principal de la tarjeta */}
            <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-neutral-100 dark:bg-gray-800" />
            <div className="relative h-64 w-64 rounded-[calc(var(--radius)-4px)]">
                {imageUrl && <img src={imageUrl} alt={title} className="object-cover w-64 h-64" />}
            </div>

            {/* Contenido principal de la tarjeta */}
            <div className="relative px-4 pt-2">
                <h3 className="font-semibold text-lg text-center text-neutral-800 dark:text-neutral-300">
                    {title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    {description}
                </p>
            </div>

            {/* Modal animado que muestra hoverDescription */}
            <animated.div
                style={modalAnimation}
                className="absolute bottom-0 left-0 w-full p-4 dark:bg-gray-700 rounded-2xl"
            >
                <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-300">
                    {hoverDescription}
                </p>
            </animated.div>
        </animated.div>
    );
};

// Datos para las tarjetas en la página principal
const cardsData = [
    {
        title: "Gestión de Usuarios",
        description: "La aplicación permite agregar, modificar y eliminar perfiles de usuarios.",
        hoverDescription: "Cada perfil puede contener información relevante como nombre, rol en la empresa y nivel de acceso, garantizando que solo las personas autorizadas puedan gestionar ciertos aspectos del negocio.",
        imageUrl: "./assets/jpg/gestion_usuarios.jpg"
    },
    {
        title: "Gestión de Productos",
        description: "El núcleo de la aplicación se centra en ofrecer una administración de productos fácil y detallada.",
        hoverDescription: "Cada producto puede registrarse con atributos personalizados como nombre, descripción, precio, cantidad disponible, y otras características necesarias para la operación del negocio.",
        imageUrl: "./assets/jpg/gestion_product.jpg"
    },
    {
        title: "Gestión de Clientes",
        description: "La base de datos de clientes es uno de los activos más importantes para un negocio.",
        hoverDescription: " Esta funcionalidad permite registrar nuevos clientes y almacenar detalles esenciales como información de contacto, historial de compras y preferencias personales, facilitando un enfoque personalizado y orientado a mejorar las relaciones comerciales.",
        imageUrl: "./assets/jpg/gestion_cliente.jpg"
    },
    {
        title: "Seguimiento de Ventas",
        description: "Esta funcionalidad ofrece una visión clara y concisa del rendimiento de las ventas a lo largo del tiempo.",
        hoverDescription: "Permite monitorear el progreso de cada transacción, identificar cuellos de botella en el proceso de ventas y generar informes para analizar el comportamiento de los clientes y la eficacia de las estrategias de ventas.",
        imageUrl: "./assets/jpg/seguimien_venta.jpg"
    },
];

export default function HomePage() {
    return (
        <div className="max-w-screen-xl">
            <div className="max-w-2xl sm:text-center md:mx-auto">
                <h2 className="text-xl text-gray-800 font-extrabold mx-auto sm:text-6xl mt-16">
                    Explora las funciones que ofrecemos
                </h2>
                <p className="mt-3 text-gray-600">
                    La integración de todas las funcionalidades en una única plataforma.
                </p>
            </div>
            {/* Ajusta el grid para que todas las tarjetas estén en una fila */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-8">
                {cardsData.map((card, index) => (
                    <MagicCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        hoverDescription={card.hoverDescription}
                        imageUrl={card.imageUrl}
                        zIndex={index} // Definir zIndex dinámico
                    />
                ))}
            </div>       
        </div>
    );
    
}
