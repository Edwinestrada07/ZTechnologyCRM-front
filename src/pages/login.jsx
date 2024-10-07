import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function Login({ toggleForm }) {
    const [login, setLogin] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')

    const onChangeData = (event) => {
        setLogin({
            ...login,
            [event.target.id]: event.target.value,
        });
    };

    const submit = async (event) => {
        event.preventDefault();

        if (!login.email || !login.password) {
            setErrorMessage('Complete todos los campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login),
            });

            const dataResponse = await response.json();
            localStorage.setItem('user', JSON.stringify(dataResponse.user));
            localStorage.setItem('token', dataResponse.token);

            setSuccessMessage('Inicio de Sesión con éxito.');
            setErrorMessage('');

            window.location.href = '/';
        } catch (error) {
            setErrorMessage('Error al iniciar sesión.');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <section>
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
                    
                    <div className="w-full bg-gray-300 rounded-3xl shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={submit} className="space-y-4 md:space-y-6" action="#">
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
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input 
                                                id="remember" 
                                                aria-describedby="remember" 
                                                type="checkbox" 
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button to="/signup" type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg border-3 text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" onClick={toggleForm} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>  
    );
}

export default Login;
