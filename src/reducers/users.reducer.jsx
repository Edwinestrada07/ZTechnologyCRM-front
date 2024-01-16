function UserReducer (state, action) {
    switch (action.type) {
        case 'loading':
            return {
                users: state.users, 
                status: 'loading'    
            }
        case 'error':
            return {
                users: state.users, 
                status: 'error'
            }
        case 'success':
            return {
                users: action.data,
                status: 'success'
            } 
        case 'createUser':
            return {
                users: [
                    ...state.users,
                    action.users
                ],
                status: 'success'
            }
        default:
            break 
    }
}

export default UserReducer