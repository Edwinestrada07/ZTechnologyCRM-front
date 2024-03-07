import React from 'react'

function FormUser(props) {
    const userRole = JSON.parse(localStorage.getItem('user')).role

    return (
        <form onSubmit={props.onSubmit} className="d-flex flex-wrap align-items-center">
            <div className="form-group m-2 flex-grow-1">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    id="name"
                    value={props.user.name || ''}
                    onChange={props.onChangeData}
                    disabled={userRole === 'GESTOR'}
                />
            </div>
            <div className="form-group m-2 flex-grow-1">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Correo"
                    name="email"
                    id="email"
                    value={props.user.email || ''}
                    onChange={props.onChangeData}
                    disabled={userRole === 'GESTOR'} 
                />
            </div>
            <div className="form-group m-2 flex-grow-1">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                    id="password"
                    value={props.user.password || ''}
                    onChange={props.onChangeData}
                    disabled={userRole === 'GESTOR'} 
                />
            </div>
            <div className="form-group m-2 flex-grow-1">
                <select className="form-select" id="role" onChange={props.onChangeData} value={props.user.role} disabled={userRole === 'GESTOR'}>
                    <option value="">Seleccione el rol</option>
                    <option value="GESTOR">Gestor</option>
                    <option value="ADMIN">Administrador</option>
                </select>
            </div>
            <div className="form-group m-2">
                <button 
                    className="btn btn-primary mr-2" 
                    type="submit"
                    disabled={userRole === 'GESTOR'} 
                >
                    Guardar
                </button>
                <button 
                    className="btn btn-secondary" 
                    type="button" 
                    onClick={props.onClear}
                    disabled={userRole === 'GESTOR'}
                >
                    Limpiar
                </button>
            </div>
        </form>
    )
}

export default FormUser
