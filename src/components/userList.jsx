import React from 'react'
import { Link } from "react-router-dom"

const UserList = ({ users, deleteUser, getUser }) => {

    return (
    <> { users.length > 0 ?
    <table className="table table-striped table-hover table-dark mt-4">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Constraseña</th>
                <th>Rol</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            { 
            users.map((user, i) => (
                <tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.role}</td>
                    <td>
                        <Link onClick={() => deleteUser(user.id)}>Eliminar</Link><br />
                        <Link onClick={() => getUser(user.id)}>Actualizar</Link>
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
    : <h3>No hay Usuarios</h3>}
    </>
    )
}

export default UserList