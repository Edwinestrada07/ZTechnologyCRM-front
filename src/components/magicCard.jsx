import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

// Componente MagicCard
const MagicCard = ({ title, description, size, hoverDescription }) => {
    const [isHovered, setIsHovered] = useState(false); // Estado para controlar el hover

    // Animación del modal al hacer hover
    const modalAnimation = useSpring({
        transform: isHovered ? 'translateY(0%)' : 'translateY(100%)', // El modal se desplaza de abajo hacia arriba
        opacity: isHovered ? 1 : 0, // Control de la opacidad
        config: { tension: 300, friction: 40 }, // Control de la animación
    });

    const sizeClasses = size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1';
    const heightClasses = 'min-h-[300px] lg:min-h-[400px]'; // Ajuste del tamaño vertical de las tarjetas

    return (
        <div
            onMouseEnter={() => setIsHovered(true)} // Al hacer hover muestra el modal
            onMouseLeave={() => setIsHovered(false)} // Al dejar de hacer hover oculta el modal
            className={`relative dark:bg-gray-800 rounded-2xl p-6 shadow-lg ${sizeClasses} ${heightClasses}`}
        >
            {/* Contenido principal de la tarjeta */}
            <h3 className="text-2xl font-bold text-center bg-gradient-to-tl from-slate-800 via-violet-600 to-zinc-400 bg-clip-text text-transparent">
                {title}
            </h3>
            <p className="text-base font-medium text-center mt-5 text-gray-600 dark:text-gray-300">{description}</p>

            {/* Modal animado que muestra hoverDescription */}
            <animated.div
                style={modalAnimation}
                className="absolute bottom-0 left-0 w-full p-6 bg-white dark:bg-gray-700 rounded-2xl"
            >
                <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-300">
                    {hoverDescription}
                </p>
            </animated.div>
        </div>
    );
};

// Datos para las tarjetas en la página principal
const cardsData = [
    {
        title: "Gestión de Usuarios",
        description: "La aplicación permite agregar, modificar y eliminar perfiles de usuarios...",
        hoverDescription: "Agregar Usuarios, Editar y Actualizar, Eliminar Usuarios...",
        size: 'large',
    },
    {
        title: "Gestión de Productos",
        description: "El núcleo de la aplicación se centra en ofrecer una administración de productos...",
        hoverDescription: "Registro de Nuevos Productos, Edición y Actualización, Control de Inventario...",
        size: 'large',
    },
    {
        title: "Gestión de Clientes",
        description: "La base de datos de clientes es uno de los activos más importantes...",
        hoverDescription: "Registro de Clientes, Edición y Visualización de Perfiles y Seguimiento de Interacciones...",
        size: 'large',
    },
    {
        title: "Seguimiento de Ventas",
        description: "Esta funcionalidad ofrece una visión clara y concisa del rendimiento de las ventas...",
        hoverDescription: "Visualización del Embudo de Ventas, Informes de Ventas...",
        size: 'large',
    },
    {
        title: "Ventajas de la Aplicación",
        description: "Eficiencia Operativa: La integración de todas las funcionalidades...",
        hoverDescription: "Mejora de la Relación con el Cliente, Control Total del Inventario...",
        size: 'large',
    },
];

export default function HomePage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 p-8">
            {cardsData.map((card, index) => (
                <MagicCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    hoverDescription={card.hoverDescription}
                    size={card.size}
                />
            ))}
        </div>
    );
}
