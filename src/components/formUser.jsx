function FormUser(props) {
    
    const submit = async (event) => { 
        event.preventDefault();

    props.onSubmit()
    };
    
    return (
        <form className="d-flex" onSubmit={submit}>
            <div className="form-group m-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    id="name"
                    value={ props.user.name ||  ''}
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Correo"
                    name="email"
                    id="email"
                    value={ props.user.email ||  ''}
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                    id="password"
                    value={ props.user.password ||  ''}
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <select id="role" onChange={props.onChangeData} value={props.user.role}>
                    <option value="USER">Gestor</option>
                    <option value="ADMIN">Administrador</option>
                </select>
            </div>
            <div className="form-group m-2">
                <button 
                    className="btn btn-primary" 
                    type="submit"
                  >
                    Guardar
                </button>
            </div>    
    
        </form>
    )
}

export default FormUser 