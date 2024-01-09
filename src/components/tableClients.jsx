import { useContext, useEffect } from "react"
import { ClientContext } from "../contexts/clients.context"
import { Link } from "react-router-dom"

function TableClients() {
    const {state, dispatch} = useContext(ClientContext)

    useEffect(() => {
        dispatch({type: 'loading'})

        fetch('http://localhost:4000/client', {
            method: 'GET',
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(response => {
            return response.json()
        }).then(response => {
            dispatch({ type: 'success', data: response })
        })
    }, [])

    const deleteClient = async (id) => {
        dispatch({type: 'loading'})
        await fetch('http://localhost:4000/client/' + id, {
            method: 'DELETE',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })

        await fetch('http://localhost:4000/client', {
            method: 'GET',
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(response => {
            return response.json()
        }).then(response => {
            dispatch({ type: 'success', data: response })
        })
    }

    if(state === 'loading') {
        return 'loading...'
    }

    return (
        <table>
            <thead>
                {/*<th>Nombre</th>*/}
                <th>Correo</th>
                <th>Dirección</th>
                <th>Celular</th>
                <th>Acción</th>
            </thead>

            <tbody>
                {state.clients.map((client, i) => {
                    <tr key={i}>
                        {/*<td>{client.name}</td>*/}
                        <td>{client.email}</td>
                        <td>{client.address}</td>
                        <td>{client.phone}</td>
                        <td><Link onClick={() => deleteClient(client.id)}>Eliminar</Link></td>                    
                    </tr>
                })}
            </tbody>
        </table>

    )
}

export default TableClients