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

    const submit = async (event) => {
        event.preventDefault();
        dispatch({ type: 'loading' });

        try {
            await new Promise(resolve => setTimeout(resolve, 500)); // Simula el tiempo de espera
    
            const response = await fetch('http://localhost:4000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(users)
            });
    
            const responseData = await response.json();
            dispatch({ type: 'createUser', users: responseData.users });
        } catch (error) {
            // Manejo de errores, por ejemplo, dispatch de un error
            console.error('Error submitting data:', error);
            dispatch({ type: 'error', error: 'Error submitting data' });
        }
    };
    

    if(state.status === 'loading')
        return 'loading'

    return (
        <form onSubmit={submit}>
            <label htmlFor="email">Correo</label>
            <input type="text" id="email" onChange={onChangeData} />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange={onChangeData} />

            <button type="submit">Guardar</button>
        </form>
    )
}

export default FormUser