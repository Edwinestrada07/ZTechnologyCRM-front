import React from 'react'

function FormClient(props) {

    const submit = async (event) => {
        event.preventDefault()
        props.onSubmit()
    }

    return (
        <form onSubmit={ submit } className="text-gray-600 d-flex flex-wrap align-items-center">
            <div className="m-2 flex-grow-1">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Nombre"
                    name="name"
                    id="name"
                    value={ props.client.name ||  '' }
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="m-2 flex-grow-1">
                <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Correo"
                    name="email"
                    id="email"
                    value={ props.client.email || '' }
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="m-2 flex-grow-1">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Dirección"
                    name="address"
                    id="address"
                    value={ props.client.address || '' }
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="m-2 flex-grow-1">
                <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Celular/Teléfono"
                    name="phone"
                    id="phone"
                    value={ props.client.phone || '' }
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="m-2">
                <button 
                    className="mx-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow-md transition duration-300"
                    type="submit"
                >
                    Guardar
                </button>
                <button 
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md shadow-md transition duration-300" 
                    type="button" 
                    onClick={ props.onClear }
                >
                    Limpiar
                </button>
            </div>
        </form>
    )
}

export default FormClient
