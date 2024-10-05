import React from 'react'

const Home = () => {

    return (
        <div className="container-fluid text-dark vh-90 p-5">
        
            <h1 className="text-center mb-3 font-weight-normal">Bienvenido a Gestor de Productos y Clientes</h1>
            <p className="text-center"><strong>Explora y descubre cosas interesantes</strong></p>

            <h4 className="text-a">Funcionalidades:</h4>
            <ul className="text-ul">
                <li>Agregar nuevos usuarios y productos con información detallada.</li>
                <li>Editar y actualizar información de los usuarios y productos existentes.</li>
                <li>Organizar el inventario de productos y lleva un control de estos.</li>
                <li>Eliminar perfiles de usuarios que ya no son necesarios.</li>
                <li>Interfaz intuitiva y fácil de usar.</li>
            </ul>

            <div className="card text-white m-3"></div>

            <div className="row justify-content-center">

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card  bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title font-weight-normal"><strong>Gestión de Clientes</strong></h5>
                            <p className="card-text p-3 font-monospace">
                                Registro de nuevos clientes con información detallada.
                                Visualización y edición de perfiles de clientes.
                                Seguimiento de interacciones y actividades con los clientes.
                            </p>
                            <a href="/client" className="btn btn-primary d-block mx-auto">Registrar Cliente</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card  bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title font-weight-normal"><strong>Gestión de Productos</strong></h5>
                            <p className="card-text p-3 font-monospace">
                                Registro de nuevos productos con información detallada.
                                Visualización y edición de productos. Lleva un control de todos los productos que se tienen en la tienda
                                Seguimiento de interacciones y actividades con los clientes.
                            </p>
                            <a href="/product" className="btn btn-primary d-block mx-auto">Registrar Productos</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card  bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title font-weight-normal"><strong>Seguimiento de Ventas</strong></h5>
                            <p className="card-text p-3 font-monospace">
                                Visualización del embudo de ventas para evaluar el progreso.
                                Generación de informes de ventas y rendimiento.
                            </p>
                            <a href="/quote" className="btn btn-primary d-block mx-auto">Visualiza Cotizaciones</a>
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    )
}

export default Home
