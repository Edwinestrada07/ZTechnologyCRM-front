import { useContext, useState } from "react";
import { UserContext } from "../contexts/users.context"

function FormUser() {
    const [users, setUsers] = useState({})

    const { state, dispatch } = useContext(UserContext)

    const onChangeData = (event) => {
        setUsers({
            ...users,
            [event.target.id]: event.target.value
        })
    }

    const submit = (event) => {
        event.preventDefault()
        dispatch ({ type: 'loading' })

        setTimeout(() => {
            fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(users)
        })
            .then(response => response.json())
            .then(response => {
                dispatch({ type: 'createUser', users: response.users })
            })

        }, 500)
    }

    if(state.status === 'loading')
        return 'loading'

        return (
            <form onSubmit={submit}>
                <label htmlFor="email">Correo</label>
                <input type="email" id="email" onChange={onChangeData} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" onChange={onChangeData} />

                <button type="submit">Guardar</button>
            </form>
        )
}

export default FormUser