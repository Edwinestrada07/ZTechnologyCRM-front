import React from 'react';

const UserList = ({ users, deleteUser, getUser }) => {
    return (
        <>
            {users.length > 0 ? (
                <table className="table table-striped table-hover table-dark mt-4">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Contraseña</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="btn btn-primary form-group m-2" onClick={() => deleteUser(user.id)}>Eliminar</button>
                                    <button className="btn btn-primary form-group m-2" onClick={() => getUser(user.id)}>Actualizar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h3>No hay Usuarios</h3>
            )}
        </>
    );
};

export default UserList;
