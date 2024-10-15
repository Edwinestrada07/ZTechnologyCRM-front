import React from 'react'

const TableClients = ({ clients, deleteClient, getClient }) => {
    
    return (
        <>
            {clients.length > 0 ? (
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Nombre</th>
                                <th className="py-3 px-6">Correo</th>
                                <th className="py-3 px-6">Dirección</th>
                                <th className="py-3 px-6">Celular</th>
                                <th className="py-3 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {clients.map((client, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{client.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{client.phone}</td>
                                    <td>
                                        <button 
                                            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg" 
                                            onClick={() => deleteClient(client.id)}
                                          >
                                            Eliminar
                                        </button>
                                        <button 
                                            className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg" 
                                            onClick={() => getClient(client.id)}

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
                <h3 className="text-center mt-4">No hay Clientes</h3>
            )}
        </>
    )
}

export default TableClients
