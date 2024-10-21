import { useNavigate } from 'react-router-dom';
import bgPattern from "../svg/bg-pattern.webp";

const CTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-14">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={bgPattern}
                    layout="fill" // Ajusta la imagen para que ocupe toda la sección
                    objectfit="cover" // Hace que la imagen cubra el área
                    className="pointer-events-none" // Evita que la imagen interfiera con la interacción
                    alt="Background pattern"
                />
            </div>

            {/* Contenido superpuesto */}
            <div className="relative z-10 custom-screen">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                        La herramienta ideal para pequeñas y medianas empresas que buscan una solución integral para gestionar sus operaciones diarias.
                    </h2>
                    <p className="mt-5 text-gray-600">
                        La aplicación no solo mejora la eficiencia interna, sino que también eleva la experiencia del usuario y maximiza las oportunidades de venta.
                    </p>
                </div>
                <div className="mt-5 flex justify-center font-medium text-sm">
                    <button
                        className="py-3 px-3 text-white bg-cyan-500 hover:bg-cyan-600 rounded-md shadow"
                        onClick={() => navigate('/login')}
                    >
                        Empezar a construir
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
