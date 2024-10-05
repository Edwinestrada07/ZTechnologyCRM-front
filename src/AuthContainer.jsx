import { useState } from 'react';
import Signup from './pages/signup';
import Login from './pages/login';
import './index.css';

function AuthContainer() {
    const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar el giro

    const toggleForm = () => {
        setIsFlipped(!isFlipped); // Alternar entre Signup y Login
    };

    return (
        <div className="relative flex items-center justify-center bg-white">
            <div className="relative w-full h-screen flex items-center justify-center">
                {/* Imagen a la izquierda */}
                <div className="hidden md:block w-full bg-cover bg-center">
                    <img
                        src="./assets/png/Business.png"
                        alt="Business"
                        className="scale-90 mt-22"
                    />
                </div>
                <div className={`relative w-full h-full card-container ${isFlipped ? 'is-flipped' : ''}`}>
                    <div className="card-front">
                        <Login toggleForm={toggleForm} />
                    </div>
                    <div className="card-back">
                        <Signup toggleForm={toggleForm} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthContainer;
