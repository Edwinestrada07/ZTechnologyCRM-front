import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Features from '../components/features';
import MagicCard from '../components/magicCard';
import CTA from '../components/CTA';
import Testimonial from '../components/testimonial';

const Home = () => {
    const navigate = useNavigate();

    // Redirecciona al usuario a la página de inicio si no está autenticado
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <section>
            <div className="custom-screen py-28 text-gray-600">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                        Optimiza tu gestión de inventario y relaciones con clientes.
                    </h1>
                    <p className="max-w-xl mx-auto">
                        La aplicación está diseñada para facilitar la operación diaria de un negocio, ayudando a los dueños o 
                        administradores a gestionar productos y clientes de manera eficiente.
                    </p>
                    <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                        <button
                            className="py-3 px-3 text-white bg-cyan-500 hover:bg-cyan-600 rounded-md shadow"
                            onClick={() => navigate('/login')}
                        >
                            Empezar a construir
                        </button>
                        <a
                            href="#learn-more"
                            className="px-4 py-2 text-cyan-600 font-medium bg-cyan-100 rounded-full inline-flex items-center"
                        >
                            <strong className="mx-2">Leer más</strong>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>

            <div  id="learn-more" className="bg-gray-800">
                <Features />    
            </div>

            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <MagicCard />        
           </div>

           <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <CTA />        
           </div>
        
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <Testimonial />
            </div>
        </section> 
    );
};

export default Home;
