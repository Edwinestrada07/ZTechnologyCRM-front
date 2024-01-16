import { useReducer } from "react"
import { ClientContext } from "../contexts/clients.context"
import ClientReducer from "../reducers/clients.reducer"
import TableClients from "../components/tableClients"
import FormClient from "../components/formClient"

function Client() {

    const [state, dispatch] = useReducer(ClientReducer, { clients: [] } )

    return <>
        <h2>Página de Clientes</h2>
        <ClientContext.Provider value={{ state, dispatch }} > 
            <FormClient />
            <TableClients />
        </ClientContext.Provider>
    </>
}

export default Client 