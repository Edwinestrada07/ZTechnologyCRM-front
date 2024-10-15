import React from 'react';

const TableUsers = ({ users, deleteUser, getUser }) => {
    const userRole = JSON.parse(localStorage.getItem('user')).role;

    return (
        <>
            {users.length > 0 ? (
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Nombre</th>
                                <th className="py-3 px-6">Correo</th>
                                <th className="py-3 px-6">Contraseña</th>
                                <th className="py-3 px-6">Rol</th>
                                <th className="py-3 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">*******</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                                    <td>
                                        <button 
                                            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg" 
                                            onClick={() => deleteUser(user.id)}
                                            disabled={userRole === 'GESTOR'} 
                                        >
                                            Eliminar
                                        </button>
                                        <button 
                                            className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg" 
                                            onClick={() => getUser(user.id)}
                                            disabled={userRole === 'GESTOR'} 
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
    );
};

export default TableUsers;
