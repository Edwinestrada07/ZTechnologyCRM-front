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
                        La aplicación está diseñada para facilitar la operación diaria de un negocio, ayudando a los dueños o 
                        administradores a gestionar productos y clientes de manera eficiente.
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
                <div className="items-center lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img
                            src="./assets/jpg/negocio.jpg"
                            alt="Negocio"
                            className="scale-75 rounded-2xl"
                        />
                    </div>
                    <div className="max-w-xl md:mt-0 lg:max-w-2xl my-5 mr-5">
                        <h2 className="text-gray-100 text-2xl text-center font-semibold sm:text-4xl">
                            La integración de todas las funciones en una única plataforma
                        </h2>
                        <p className="my-4 text-gray-400">
                            "Gestor de Productos y Clientes" es una aplicación diseñada para empresas de cualquier tamaño que necesitan 
                            una forma sencilla, eficiente y organizada de gestionar sus productos, clientes y ventas. Con una interfaz 
                            intuitiva, la aplicación permite a los usuarios controlar todos los aspectos del inventario, mantener actualizados 
                            los datos de sus clientes, y hacer un seguimiento preciso del rendimiento de las ventas. Este sistema centralizado 
                            ahorra tiempo, reduce errores y mejora la toma de decisiones.
                        </p>
                        <button
                            className="py-3 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
                            onClick={() => navigate('/product')}
                        >
                            Empezar a construir
                        </button>
                    </div>
                </div>

                <div className="items-center lg:flex lg:flex-row-reverse">
                    <div className="flex-1 sm:hidden lg:block">
                        <img
                            src="./assets/png/logo_home.png"
                            alt="Logo_CMR"
                            className="scale-50"
                        />
                    </div>
                    <div className="max-w-xl lg:max-w-2xl ml-5">
                        <h2 className="text-gray-100 text-2xl text-center font-semibold sm:text-4xl">
                            Sistematización de la información
                        </h2>
                        <p className="my-3 text-gray-400 ">
                            Los CRM han evolucionado mucho en los últimos años, sobre todo a la par de los cambios tecnológicos que cambiaron 
                            -y siguen cambiando- la manera de hacer negocios.<br></br>
                            <br></br>
                            Hoy en día, cada escenario de ventas requiere de las empresas un conocimiento cabal de las características, necesi
                            dades y preguntas de los clientes; los consumidores demandan, más que nunca, personalización, y eso es algo que 
                            -paradójicamente- sólo puede lograrse con automatización.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-xl text-gray-800 font-extrabold mx-auto sm:text-6xl mt-16">
                        Explora las funciones que ofrecemos
                    </h2>
                    <p className="mt-3 text-gray-600">
                        La integración de todas las funcionalidades en una única plataforma.
                    </p>
                </div>
                <MagicCard />        
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
