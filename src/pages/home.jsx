import React from 'react'
import '../navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

    return (


        <div className="container-fluid text-white vh-90 p-5">
        
            <h1 className="text-center mb-3 font-weight-normal">Bienvenido a mi Sitio</h1>
            <p className="text-center">Explora y descubre cosas interesantes.</p>

            <div className="card text-white m-3"></div>

            <div className="">
                <h5 className="card-title font-weight-normal">Gestión de Clientes</h5>
                    <p className="card-text p-3 font-monospace">
                        Registro de nuevos clientes con información detallada.
                        Visualización y edición de perfiles de clientes.
                        Seguimiento de interacciones y actividades con los clientes.
                    </p>

                    <h5 className="card-title font-weight-normal">Gestión de Oportunidades de Negocio</h5>
                    <p className="card-text p-3 font-monospace">
                        Creación y seguimiento de oportunidades de venta.
                        Asignación de oportunidades a equipos de ventas.
                        Registro de actividades y comentarios relacionados con cada oportunidad.
                    </p>

                    <h5 className="card-title font-weight-normal">Seguimiento de Ventas</h5>
                    <p className="card-text p-3 font-monospace">
                        Visualización del embudo de ventas para evaluar el progreso.
                        Generación de informes de ventas y rendimiento.
                    </p>
                    
            </div>

        </div>
    )
}

export default Home
