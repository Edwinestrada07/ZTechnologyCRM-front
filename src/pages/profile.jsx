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
                        <h2 className="text-center font-weight-normal mb-4">Página de Acceso</h2>
                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={handlePasswordChange}>
                            <h3 className="text-center mb-4">Cambiar Contraseña</h3>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder='Contraseña Actual'
                                    type="password" 
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder='Nueva contraseña'
                                    type="password"  
                                    value={newPassword} 
                                    onChange={e => setNewPassword(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder='Confirmar nueva contraseña'
                                    type="password"  
                                    value={confirmNewPassword} 
                                    onChange={e => setConfirmNewPassword(e.target.value)} 
                                />
                            </div>
                            <div className="form-group text-center">
                                <button 
                                    className="btn btn-primary" 
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
