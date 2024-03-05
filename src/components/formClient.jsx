import { useContext, useState } from 'react'
import { ClientContext } from '../contexts/clients.context'

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
        event.preventDefault()
        dispatch({ type: 'loading' })
        
        try {
            await new Promise(resolve => setTimeout(resolve, 500)) // Simula el tiempo de espera
    
            const response = await fetch('http://localhost:4000/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(client)
            })
    
            const responseData = await response.json()
            dispatch({ type: 'createClient', client: responseData.client })
            
        } catch (error) {
            console.error('Error al enviar datos:', error);
            dispatch({ type: 'error', error: 'Error al enviar datos' });
        }
    }

    if(state.status === 'loading') 
        return 'loading...'

    return (
        <form onSubmit={submit} className="d-flex flex-wrap align-items-center">
            <div className="form-group m-2 flex-grow-1">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    id="name"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2 flex-grow-1">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Correo"
                    name="email"
                    id="email"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2 flex-grow-1">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Dirección"
                    name="address"
                    id="address"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2 flex-grow-1">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Celular/Teléfono"
                    name="phone"
                    id="phone"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <button className="btn btn-primary mr-2" type="submit">
                    Guardar
                </button>
            </div>
        </form>
    )
}

export default FormClient
