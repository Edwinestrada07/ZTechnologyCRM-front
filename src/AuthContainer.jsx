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
        <div className="relative w-full h-screen flex items-center justify-center bg-gray-200">
            <div className="relative w-full h-screen flex items-center justify-center">
                {/* Imagen a la izquierda */}
                <div className="hidden md:block w-full bg-cover bg-center" style={{ backgroundImage: 'url("/your-image-path.jpg")' }}></div>
                <div className={`relative w-full h-full card-container ${isFlipped ? 'is-flipped' : ''}`}>
                    <div className="card-front">
                        <Signup toggleForm={toggleForm} />
                    </div>
                    <div className="card-back">
                        <Login toggleForm={toggleForm} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthContainer;
