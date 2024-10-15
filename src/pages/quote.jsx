import { useState, useEffect } from 'react'

function Quote() {
    const [clients, setClients] = useState([])
    const [products, setProducts] = useState([])
    const [selectedClient, setSelectedClient] = useState('')
    const [selectedProduct, setSelectedProduct] = useState('')
    const [quoteCreated, setQuoteCreated] = useState(false)
    const [quoteData, setQuoteData] = useState({
        product: '',
        cant: '',
        price: '',
        description: '',
        subtotal: '',
        shippingPrice: '',
        total: ''
    })
    const [quoteList, setQuoteList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener clientes
                const clientsResponse = await fetch('http://localhost:4000/client', {
                    method: 'GET',
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                });
                const clientsData = await clientsResponse.json();
                setClients(clientsData);

                // Obtener productos
                const productsResponse = await fetch('http://localhost:4000/product', {
                    method: 'GET',
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                })
                const productsData = await productsResponse.json();
                setProducts(productsData);

                // Obtener cotizaciones
                const quotesResponse = await fetch('http://localhost:4000/quote', {
                    method: 'GET',
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                })
                const quotesData = await quotesResponse.json()
                setQuoteList(quotesData)

            } catch (error) {
                console.error("Error al obtener datos:", error)
            }
        }

        fetchData();
    }, [quoteCreated]); // Actualiza la lista de cotizaciones cuando se crea una nueva

    const handleClientChange = (event) => {
        setSelectedClient(event.target.value)
    }

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setQuoteData({
            ...quoteData,
            [name]: value
        })
    }

    const createQuote = async () => {
        try {
            const response = await fetch('http://localhost:4000/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify({
                    clientId: selectedClient,
                    productId: selectedProduct,
                    ...quoteData
                })
            })

            if (response.ok) {
                setQuoteCreated(!quoteCreated) // Cambia el estado para actualizar la lista de cotizaciones
            } else {
                console.error('No se pudo crear la cotización')
            }
        } catch (error) {
            console.error('Error al crear cotización:', error)
        }
    }

    const deleteQuote = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/quote/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })

            if (response.ok) {
                setQuoteCreated(!quoteCreated); // Cambia el estado para actualizar la lista de cotizaciones
            } else {
                console.error('No se pudo eliminar la cotización')
            }
        } catch (error) {
            console.error('Error al eliminar cotización:', error)
        }
    }

    return (
        <div className="container">
            <div className="text-white p-5">
                <h2 className="text-gray-800 text-center text-3xl my-3 font-extrabold sm:text-4xl"><strong>Página de cotizaciones</strong></h2>
                <p className="text-gray-600 my-2">
                    A continuación el formulario para generar las cotizaciones.
                </p>
                <form className="text-gray-600 d-flex flex-wrap align-items-center">
                    <div className="m-2 flex-grow-1">
                        <select id="clientSelect" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" onChange={handleClientChange}>
                            <option value="">Seleccione un Cliente</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>{client.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="m-2 flex-grow-1">
                        <select id="productSelect" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" onChange={handleProductChange}>
                            <option value="">Seleccione un Producto</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.title} -- (${product.price})</option>
                            ))}
                        </select>
                    </div>

                    <div className="m-2 flex-grow-1">
                        <input 
                            type="number" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            id="Cant" 
                            placeholder="Cantidad"
                            name="cant" 
                            value={quoteData.cant} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="m-2 flex-grow-1">
                        <input 
                            type="number" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            id="Price" 
                            placeholder="PrecioXUnidad"
                            name="price" 
                            value={quoteData.price} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="m-2 flex-grow-1">
                        <input 
                            type="number" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            id="subtotal" 
                            placeholder="SubTotal"
                            name="subtotal" 
                            value={quoteData.subtotal} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="m-2 flex-grow-1">
                        <input 
                            type="number" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            id="shippingPrice" 
                            placeholder="Precio Envío"
                            name="shippingPrice" 
                            value={quoteData.shippingPrice} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="m-2 flex-grow-1">
                        <input 
                            type="number" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            id="Total" 
                            placeholder="Total"
                            name="total" 
                            value={quoteData.total} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="m-2 flex-grow-1">
                        <textarea 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            id="description" 
                            placeholder="Descripción"
                            name="description" 
                            value={quoteData.description} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="m-2 flex-grow-1">
                        <button 
                            className="mx-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow-md transition duration-300" 
                            onClick={createQuote}
                        >
                            Crear Cotización
                        </button>
                    </div>

                    {quoteCreated && (
                        <div className="col-12 mt-3">
                            <div className="alert alert-success" role="alert">
                                Cotización creada exitosamente.
                            </div>
                        </div>
                    )}
                </form>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-3">
                    {/* Renderiza las tarjetas de cotización */}
                    {quoteList.map(quote => (
                        <div key={quote.id} className="">
                            <div className="bg-gray-100 text-gray-600 font-medium border-b">
                                <div className="card-body">
                                    <h3 className="px-4 py-3 text-center whitespace-nowrap"><strong>Cotización #{quote.id}</strong></h3>
                                    <p className="py-1 px-2">Productos: {quote.product}</p>
                                    <p className="py-1 px-2">Cantidad: {quote.cant}</p>
                                    <p className="py-1 px-2">PrecioXUnidad: {quote.price}</p>
                                    <p className="py-1 px-2">Descripción: {quote.description}</p>
                                    <p className="py-1 px-2">Subtotal: {quote.subtotal}</p>
                                    <p className="py-1 px-2">Precio Envío: {quote.shippingPrice}</p>
                                    <p className="py-1 px-2">Total: {quote.total}</p>
                                    <p className="py-1 px-2">Cliente: {clients.find(client => client.id === quote.clientId)?.name}</p>
                                    <button 
                                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-200 rounded-lg" 
                                        onClick={() => deleteQuote(quote.id)}
                                    >
                                        Eliminar
                                    </button>
                                    {/* Agrega aquí la lógica para modificar la cotización */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>  
    )
}

export default Quote
