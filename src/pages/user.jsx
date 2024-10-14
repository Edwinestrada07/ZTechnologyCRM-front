import UserList from '../components/userList'
import FormUser from '../components/formUser'
import { useEffect, useState } from 'react'

const UserPage = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [isEditUser, setIsEditUser] = useState(false)
    const [isManager, setIsManager] = useState(false)

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/user', {
                method: 'GET',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            });

            const users = await response.json()
            setUsers(users)

        } catch (error) {
            console.error('error', error)
        }
    }

    const getUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/user/${id}`, {
                method: 'GET',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            });

            const user = await response.json()
            setUser(user)
            setIsEditUser(true)

        } catch (error) {
            console.error('error', error)
        }
    }

    useEffect(() => {
        getUsers();
        // Verificar el rol del usuario almacenado en el localStorage
        const userRole = JSON.parse(localStorage.getItem('user')).role;
        setIsManager(userRole === 'GESTOR');
    }, [])

    const createUser = async (user) => {
        try {
            const response = await fetch('http://localhost:4000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(user)
            })
            const responseData = await response.json()
            console.log('Usuario creado:', responseData)

            getUsers()
            setUser({})

        } catch (error) {
            console.error('Error al crear Usuario', error)
        }
    }

    const updateUser = async (user) => {
        try {
            const response = await fetch(`http://localhost:4000/user/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(user)
            });
            const responseData = await response.json()
            console.log('Usuario actualizado:', responseData)

            getUsers()

        } catch (error) {
            console.error('Error al actualizar Usuario', error)
        }
    }

    const deleteUser = async (id) => {
        await fetch(`http://localhost:4000/user/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })

        getUsers()
    }

    const onChangeData = (event) => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }

    const onSubmit = () => {
        if (isEditUser) {
            updateUser(user)
        } else {
            createUser(user)
        }
    }

    const onClear = () => {
        setUser({})
        setIsEditUser(false)
    }

    return (
        <>
            <div className="container">
                <div className="text-white p-5">
                    <h2 className="text-gray-800 text-center text-3xl my-3 font-extrabold sm:text-4xl"><strong>Página de Usuarios</strong></h2>
                    <p className="text-gray-600 my-2">
                        A continuación el formulario para el ingreso de Usuarios, tenga presente que el rol de Admin tiene la función de actualizar los demás perfiles.
                    </p>
                    <FormUser user={user} onSubmit={onSubmit} onChangeData={onChangeData} onClear={onClear} isCreating={!isEditUser} disabled={isManager} />
                    <UserList users={users} getUser={getUser} deleteUser={deleteUser} disabled={isManager} />
                </div>
            </div>
        </>
    )
}

export default UserPage
