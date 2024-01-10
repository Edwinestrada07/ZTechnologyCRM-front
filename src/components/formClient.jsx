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

    const submit = (event) => {
        event.preventDefault()
        dispatch({ type: 'loading' })

        setTimeout(() => {
            fetch('http://localhost:4000/client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(client)
        })
            .then(response => response.json())
            .then(response => {
                dispatch({ type: 'createClient', client: response.client })
            })

        }, 1000)

    }

    if(state.status === 'loading') 
        return 'loading...'

    return (
        <form onSubmit={submit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" onChange={onChangeData} />
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" onChange={onChangeData} />
            <label htmlFor="address">Dirección</label>
            <input type="text" id="address" onChange={onChangeData} />
            <label htmlFor="phone">Celular</label>
            <input type="number" id="phone" onChange={onChangeData} />

            <button type="submit">Guardar</button>
        </form>
    )
}

export default FormClient