import React, { useState } from 'react'

const Profile = () => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [error, setError] = useState(null)

    const handlePasswordChange = (e) => {
        e.preventDefault()

        const token = localStorage.getItem('token')

        if (!token) {
            setError('No se ha encontrado un token de autenticación')
            return
        }

        if (newPassword !== confirmNewPassword) {
            setError('Las contraseñas nuevas no coinciden')
            return
        }

        fetch('http://localhost:4000/user/change-password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem('token')
            },
            body: JSON.stringify({ password, newPassword }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un error al cambiar la contraseña')
            }
            return response.json()
        })
        .then(data => {
            console.log('Contraseña cambiada:', data)

            setPassword('')
            setNewPassword('')
            setConfirmNewPassword('')
            setError(null)
        })
        .catch(error => setError(error.message))
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-white p-5">
                        <h2 className="text-gray-800 text-center text-3xl my-3 font-extrabold sm:text-4xl">Página de Acceso</h2>
                        <p className="text-gray-600 my-2 text-center">
                            A continuación el formulario para el cambio de contraseña.
                        </p>
                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={handlePasswordChange} className="text-gray-600 d-flex flex-wrap align-items-center">
                            <div className="m-2 flex-grow-1">
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    placeholder='Contraseña Actual'
                                    type="password" 
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)} 
                                />
                            </div>
                            <div className="m-2 flex-grow-1">
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    placeholder='Nueva Contraseña'
                                    type="password"  
                                    value={newPassword} 
                                    onChange={e => setNewPassword(e.target.value)} 
                                />
                            </div>
                            <div className="m-2 flex-grow-1">
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    placeholder='Confirmar Contraseña'
                                    type="password"  
                                    value={confirmNewPassword} 
                                    onChange={e => setConfirmNewPassword(e.target.value)} 
                                />
                            </div>
                            <div className="m-2 form-group text-center">
                                <button 
                                    className="mx-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow-md transition duration-300"  
                                    onClick={handlePasswordChange}
                                    type="submit"
                                >
                                    Cambiar Contraseña
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
