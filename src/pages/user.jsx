import React, { useReducer } from 'react'
import UserList from "../components/userList"
import UserReducer from '../reducers/users.reducer'
import { UserContext } from '../contexts/users.context'

import FormUser from '../components/formUser'

const UserPage = () => {

  const [state, dispatch] = useReducer(UserReducer, { users: []})

  return <>
    <div>
      <h2>Página de Usuarios</h2>
      <UserContext.Provider value={{ state, dispatch }} >
          <FormUser />
          <UserList />
      </UserContext.Provider>
    </div>
    </>
}

export default UserPage