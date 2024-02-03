function FormUser(props) {
    
    const submit = async (event) => { 
        event.preventDefault()

    props.onSubmit()
    }
    
    return (
        <>
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
                        disabled={ !props.isCreating}
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
                    <select className="form-select" id="role" onChange={props.onChangeData} value={props.user.role}>
                        <option value="">Seleccione el rol</option>
                        <option value="GESTOR">Gestor</option>
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
                <div className="form-group m-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar usuario"
                        name="searchTerm"
                        id="searchTerm"
                        value={props.searchTerm || ''}
                        onChange={props.onSearchChange}
                    />
                </div>
                <div className="form-group m-2">
                    <button className="btn btn-primary" type="button" onClick={props.onSearch}>
                        Buscar
                    </button>
                </div>
            </form>

            <div className="btn mx-2">
                <button 
                    className="btn btn-primary" 
                    type="submit"
                    onClick={props.onClear}
                >
                    Limpiar
                </button>
            </div>

        </>
    )
        
}

export default FormUser 