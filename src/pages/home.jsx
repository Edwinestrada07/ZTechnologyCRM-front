import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MagicCard from '../components/magicCard';
import Testimonial from '../components/testimonial';
import Features from '../components/features';
import CTA from '../components/CTA';


const Home = () => {
    const navigate = useNavigate();

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
                            onClick={() => navigate('/product')}
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
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl mt-16">
                        Vea lo que otros dicen sobre nosotros
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Escuche lo que los expertos de todo el mundo dicen sobre nosotros.
                    </p>
                </div>
                <div className="mt-12">
                    <Testimonial />
                </div>
            </div>
        </section> 
    )
}

export default Home
