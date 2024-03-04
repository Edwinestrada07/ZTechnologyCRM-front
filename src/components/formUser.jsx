function FormUser(props) {
    const submit = async (event) => { 
        event.preventDefault()
        props.onSubmit()
    }
    
    return (
        <form onSubmit={submit} className="d-flex flex-wrap align-items-center">
            <div className="form-group m-2 flex-grow-1">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    id="name"
                    value={props.user.name || ''}
                    onChange={props.onChangeData}
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
                    disabled={!props.isCreating}
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
                />
            </div>
            <div className="form-group m-2 flex-grow-1">
                <select className="form-select" id="role" onChange={props.onChangeData} value={props.user.role}>
                    <option value="">Seleccione el rol</option>
                    <option value="GESTOR">Gestor</option>
                    <option value="ADMIN">Administrador</option>
                </select>
            </div>
            <div className="form-group m-2">
                <button className="btn btn-primary mr-2" type="submit">
                    Guardar
                </button>
                <button className="btn btn-secondary" type="button" onClick={props.onClear}>
                    Limpiar
                </button>
            </div>
        </form>
    )
}

export default FormUser
