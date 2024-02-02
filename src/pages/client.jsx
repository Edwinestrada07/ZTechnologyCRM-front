import { useReducer } from "react"
import { ClientContext } from "../contexts/clients.context"
import ClientReducer from "../reducers/clients.reducer"
import TableClients from "../components/tableClients"
import FormClient from "../components/formClient"

function Client() {

    const [state, dispatch] = useReducer(ClientReducer, { clients: [] } )

    return ( 
      <>
        <div className="container-fluid bg-dark text-white vh-100 p-5">

            <h2 className="text-center">Página de Clientes</h2>
            
            <ClientContext.Provider value={{ state, dispatch }} > 
                <FormClient />
                <TableClients />
            </ClientContext.Provider>
        </div>
      </>
    )
}

export default Client 