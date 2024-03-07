import React, { useState } from 'react'

const Profile = () => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [error, setError] = useState(null)

    const handlePasswordChange = () => {
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
            <h2 className="text-center font-weight-normal text-light m-2"><strong>Página de Acceso</strong></h2>

            <div className="form-group m-2 flex-grow-1">
                {error && <div className="alert alert-danger col-md-6">{error}</div>}

                <div className="col-md-6">
                    <div className="m-5">
                        <h3 className="text">Cambiar Contraseña</h3>
                        <label className="text-a">
                            Contraseña actual
                            <input
                                className="form-styling-inf"
                                type="password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </label>
                        
                        <label className="text-a">
                            Nueva contraseña
                            <input
                                className="form-styling-inf"
                                type="password"  
                                value={newPassword} 
                                onChange={e => setNewPassword(e.target.value)} 
                            />
                        </label>

                        <label className="text-a">
                            Confirmar nueva contraseña
                            <input
                                className="form-styling-inf"
                                type="password"  
                                value={confirmNewPassword} 
                                onChange={e => setConfirmNewPassword(e.target.value)} 
                            />
                        </label>
                        <button className="btn-animate" onClick={handlePasswordChange}>Cambiar Contraseña</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
