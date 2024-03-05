import React from 'react'

const UserList = ({ users, deleteUser, getUser }) => {
    return (
        <>
            {users.length > 0 ? (
                <div className="table-responsive mt-4">
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
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
                                    <td>*******</td> {/* Mostrar asteriscos en lugar de la contraseña */}
                                    <td>{user.role}</td>
                                    <td>
                                        <button 
                                            className="btn btn-primary mr-3" 
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Eliminar
                                        </button>
                                        <button 
                                            className="btn btn-primary" 
                                            onClick={() => getUser(user.id)}
                                        >
                                            Actualizar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h3>No hay Usuarios</h3>
            )}
        </>
    )
}

export default UserList
