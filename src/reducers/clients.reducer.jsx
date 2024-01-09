function ClientReducer (state, action) {
    switch (action.type) {
        case 'loading':
            return {
                clients: state.clients,
                status: 'loading'    
            }
        case 'error':
            return {
                clients: state.clients,
                status: 'error'
            }
        case 'success':
            return {
                clients: action.data,
                status: 'success'
            } 
        case 'createClient':
            return {
                clients: [
                    ...state.clients,
                    action.client
                ],
                status: 'success'
            }
        default:
            break 
    }
}

export default ClientReducer 