import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MagicCard from '../components/magicCard';
import Testimonial from '../components/testimonial';


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
                        La aplicación está diseñada para facilitar la operación diaria de un negocio, ayudando a los dueños o administradores a gestionar productos y clientes de manera eficiente.
                    </p>
                    <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                        <button
                            className="py-3 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
                            onClick={() => navigate('/product')}
                        >
                            Empezar a construir
                        </button>
                        <a
                            href="#learn-more"
                            className="px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                        >
                            <strong className="mx-2">Leer más</strong>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>

            <div  id="learn-more" className="bg-gray-800">
                <div className="items-center gap-x-5 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img
                            src="./assets/jpg/negocio.jpg"
                            alt="Negocio"
                            className="scale-90 rounded-2xl"
                        />
                    </div>
                    <div className="max-w-xl md:mt-0 lg:max-w-2xl my-5 mr-5">
                        <h2 className="text-gray-100 text-3xl font-semibold sm:text-4xl">
                            La integración de todas las funciones en una única plataforma
                        </h2>
                        <p className="my-3 text-gray-400">
                            "Gestor de Productos y Clientes" es una aplicación diseñada para empresas de cualquier tamaño que necesitan una forma sencilla, eficiente y organizada de gestionar sus productos, clientes y ventas. Con una interfaz intuitiva, la aplicación permite a los usuarios controlar todos los aspectos del inventario, mantener actualizados los datos de sus clientes, y hacer un seguimiento preciso del rendimiento de las ventas. Este sistema centralizado ahorra tiempo, reduce errores y mejora la toma de decisiones.
                        </p>
                        <button
                            className="py-3 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
                            onClick={() => navigate('/product')}
                        >
                            Empezar a construir
                        </button>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See what others saying about us
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Listen to what the experts around the world are saying about us.
                    </p>
                </div>
                <MagicCard />        
           </div>
        
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See what others saying about us
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Listen to what the experts around the world are saying about us.
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
