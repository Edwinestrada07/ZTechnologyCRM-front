import React, { useState } from 'react';

const Profile = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState(null);

    const PasswordChange = () => {
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No se ha encontrado un token de autenticación');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setError('Las contraseñas nuevas no coinciden');
            return;
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
                throw new Error('Hubo un error al cambiar la contraseña');
            }
            return response.json();
        })
        .then(data => {
            console.log('Contraseña cambiada:', data);
            setPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
            setError(null);
        })
        .catch(error => setError(error.message));
    };

    return (
        <div className="container">
            <h2 className="text-center mt-4 mb-5">Información Acceso</h2>

            <div className="row justify-content-center">
                {error && <div className="alert alert-danger col-md-6">{error}</div>}

                <div className="col-md-6">
                    <div className="m-3">
                        <h3 className="text-center">Cambiar Contraseña</h3>
                        <label className="text-a">
                            Contraseña actual
                            <input
                                className="form-control mt-2"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        <label className="text-a">
                            Nueva contraseña
                            <input
                                className="form-control mt-2"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </label>

                        <label className="text-a">
                            Confirmar nueva contraseña
                            <input
                                className="form-control mt-2"
                                type="password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                            />
                        </label>
                        <button className="btn btn-primary mt-3" onClick={PasswordChange}>
                            Cambiar Contraseña
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
