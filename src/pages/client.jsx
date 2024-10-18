import { useEffect, useState } from 'react';
import FormClient from '../components/formClient';
import TableClients from '../components/tableClients';

const ClientPage = () => {
    const [clients, setClients] = useState({});
    const [client, setClient] = useState({});
    const [isEditClient, setIsEditClient] = useState(false);

    const getClients = async () => {
        try {
            const response = await fetch('http://localhost:4000/client', {
                method: 'GET',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            });
            const clients = await response.json();
            setClients(clients);

        } catch (error) {
            console.log("error", error);
        }
    };

    const getClient = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/client/${id}`, {
                method: 'GET',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })

            const client = await response.json()
            setClient(client)
            setIsEditClient(true)

        } catch (error) {
            console.error('error', error)
        }
    };

    const createClient = async (user) => {
        try {
            const response = await fetch('http://localhost:4000/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(user)
            })
            const responseData = await response.json()
            console.log('Cliente creado:', responseData)

            getClients()
            setClient({})

        } catch (error) {
            console.error('Error al crear Cliente', error)
        }
    };

    const updateClient = async (user) => {
        try {
            const response = await fetch(`http://localhost:4000/client/${client.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(user)
            });
            const responseData = await response.json()
            console.log('Cliente actualizado:', responseData)

            getClients()

        } catch (error) {
            console.error('Error al actualizar Cliente', error)
        }
    };

    const deleteClient = async (id) => {
        await fetch(`http://localhost:4000/client/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: localStorage.getItem('token')
            }
        });

        getClients()
    };

    useEffect(() => {
        getClients()
    }, []);

    const onChangeData = (event) => {
        setClient({
            ...client,
            [event.target.id]: event.target.value
        })
    };

    const onSubmit = () => {
        if (isEditClient) {
            updateClient(client)
        } else {
            createClient(client)
        }
    }

    const onClear = () => {
        setClient({})
        setIsEditClient(false)
    }

    return ( 
        <>
            <div className="container">
                <div className="text-white p-5">
                    <h2 className="text-gray-800 text-center text-3xl my-3 font-extrabold sm:text-4xl"><strong>Página de Clientes</strong></h2>
                    <p className="text-gray-600 my-2">
                        A continuación el formulario para el ingreso de Clientes.
                    </p>
                    <FormClient 
                        client={client} 
                        onSubmit={onSubmit} 
                        onChangeData={onChangeData} 
                        onClear={onClear} 
                        isCreating={!isEditClient}
                    />
                    <TableClients 
                        clients={clients} 
                        getClient={getClient} 
                        deleteClient={deleteClient}
                    />
                </div>
            </div>
        </>
    );
};

export default ClientPage; 