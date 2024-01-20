import { useContext, useState } from "react"
import { ClientContext } from "../contexts/clients.context"

function FormClient() {
    const [client, setClient] = useState({})

    const { state, dispatch } = useContext(ClientContext)

    const onChangeData = (event) => {
        setClient({
            ...client,
            [event.target.id]: event.target.value
        })
    }

    const submit = async (event) => {
        event.preventDefault();
        dispatch({ type: 'loading' });
        
        try {
            await new Promise(resolve => setTimeout(resolve, 500)); // Simula el tiempo de espera
    
            const response = await fetch('http://localhost:4000/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(client)
            });
    
            const responseData = await response.json();
            dispatch({ type: 'createClient', client: responseData.client });
        } catch (error) {
            // Manejo de errores, por ejemplo, dispatch de un error
            console.error('Error submitting data:', error);
            dispatch({ type: 'error', error: 'Error submitting data' });
        }
    };
    

    if(state.status === 'loading') 
        return 'loading...'

    return (
        <form class="btn btn-primary " onSubmit={submit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" onChange={onChangeData} />
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" onChange={onChangeData} />
            <label htmlFor="address">Dirección</label>
            <input type="text" id="address" onChange={onChangeData} />
            <label htmlFor="phone">Celular</label>
            <input type="number" id="phone" onChange={onChangeData} />

            <button class="btn btn-primary" type="submit">Guardar</button>
        </form>
    )
}

export default FormClient