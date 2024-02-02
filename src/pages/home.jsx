import React from 'react';

const Home = () => {

  return (

    <div className="container-fluid bg-dark text-white vh-100 p-5">
      <h1 className="text-center mb-4">Bienvenido a mi Sitio</h1>
      <p className="text-center">Explora y descubre cosas interesantes.</p>

      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src="url_de_tu_imagen_1.jpg"
            alt="Descripción de la imagen 1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <img
            src="url_de_tu_imagen_2.jpg"
            alt="Descripción de la imagen 2"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
