import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function Signup({ toggleForm }) {
    const [signup, setSignup] = useState({ name: '', email: '', password: '', role: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onChangeData = (event) => {
        setSignup({
            ...signup,
            [event.target.id]: event.target.value,
        });
    };

    const submit = async (event) => {
        event.preventDefault();

        if (!signup.name || !signup.email || !signup.password) {
            setErrorMessage('Por favor, complete todos los campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signup),
            });

            if (!response.ok) {
                throw new Error('Error al registrar usuario');
            }

            const dataResponse = await response.json();
            localStorage.setItem('user', JSON.stringify(dataResponse.user));
            localStorage.setItem('token', dataResponse.token);

            setSuccessMessage('Usuario registrado con éxito.');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Error al registrar usuario.');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    {successMessage && (
                        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-md transition-opacity">
                            {successMessage}
                            <button
                                onClick={() => setSuccessMessage('')}
                                className="ml-4 text-lg text-white"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    )}

                    {errorMessage && (
                        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-md transition-opacity">
                            {errorMessage}
                            <button onClick={() => setErrorMessage(null)} className="ml-4 text-lg text-white">
                                <FaTimes />
                            </button>
                        </div>
                    )}
                    
                    <div className="w-full bg-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Registrarse
                            </h1>
                            <form onSubmit={submit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Nombre" 
                                        required=""
                                        onChange={onChangeData}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="name@company.com" 
                                        required=""
                                        onChange={onChangeData}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        required=""
                                        onChange={onChangeData}
                                    />
                                </div>
                                <select id="role" onChange={onChangeData} className="w-full p-2 border border-gray-300 rounded">
                                    <option value="">Seleccione el rol</option>
                                    <option value="GESTOR">Gestor</option>
                                    <option value="ADMIN">Administrador</option>
                                </select>
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                                
                            </form>
                            <button to="/login" className="mt-4 text-blue-500" onClick={toggleForm}>
                                ¿Ya tienes una cuenta? Inicia sesión aquí
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;
