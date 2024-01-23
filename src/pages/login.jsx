import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate ('/')
        }
    }, [navigate])

    const onChangeData = (event) => {
        setLogin({
            ...login,
            [event.target.id]: event.target.value
        })
    }

    const submit = async (event) => {
        event.preventDefault()
        //console.log(login) //Para ver la información del form en la consola

        //Con el fetch conectamos nuestro login al back
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login) //Va la Data como un String
        })

        const dataResponse = await response.json() //await porque nos devuelve una promesa

        localStorage.setItem('token', dataResponse.token)
        localStorage.setItem('rol', dataResponse.rol)

        navigate('/')
    }
    
    return (
        <form className="d-flex" onSubmit={submit} id='form-login'>
            <div className="form-group m-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Correo"
                    name="email"
                    id="email"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                    id="password"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <button 
                    className="btn btn-primary" 
                    type="submit"
                  >
                    Iniciar Sesión
                </button>
            </div>
             
        </form>
    )
}

export default Login 


//event.preventDefault funciona que cada que se le de un submit el form solo envie los datos que se requiren al Javascript
//console.log(event.target) --> Mostramos el formulario HTML en la consola
//const [login, setLogin] = useState({email: '', password: ''}) --> Paa mostrar la información del formulario en consola