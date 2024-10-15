import React from 'react'

function FormUser(props) {
    const userRole = JSON.parse(localStorage.getItem('user')).role

    return (
        <form onSubmit={ props.onSubmit } className="text-gray-600 d-flex flex-wrap align-items-center">
            <div className="m-2 flex-grow-1">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Nombre"
                    name="name"
                    id="name"
                    value={ props.user.name || '' }
                    onChange={ props.onChangeData }
                    disabled={ userRole === 'GESTOR' }
                />
            </div>
            <div className="m-2 flex-grow-1">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Correo"
                    name="email"
                    id="email"
                    value={ props.user.email || '' }
                    onChange={ props.onChangeData }
                    disabled={ userRole === 'GESTOR' } 
                />
            </div>
            <div className="m-2 flex-grow-1">
                <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Contraseña"
                    name="password"
                    id="password"
                    value={ props.user.password || '' }
                    onChange={ props.onChangeData }
                    disabled={ userRole === 'GESTOR' } 
                />
            </div>
            <div className="m-2 flex-grow-1">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" id="role" onChange={props.onChangeData} value={props.user.role} disabled={userRole === 'GESTOR'}>
                    <option value="">Seleccione el rol</option>
                    <option value="GESTOR">Gestor</option>
                    <option value="ADMIN">Administrador</option>
                </select>
            </div>
            <div className="m-2">
                <button 
                    className="mx-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow-md transition duration-300" 
                    type="submit"
                    disabled={ userRole === 'GESTOR' } 
                >
                    Guardar
                </button>
                <button 
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md shadow-md transition duration-300" 
                    type="button" 
                    onClick={ props.onClear }
                    disabled={ userRole === 'GESTOR' } 
                >
                    Limpiar
                </button>
            </div>
        </form>
    )
}

export default FormUser
