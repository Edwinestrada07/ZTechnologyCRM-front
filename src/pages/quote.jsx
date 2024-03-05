import { useState, useEffect } from 'react';

function Quote() {
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quoteCreated, setQuoteCreated] = useState(false);
    const [quoteData, setQuoteData] = useState({
        cant: '',
        price: '',
        description: '',
        subtotal: '',
        shippingPrice: '',
        total: ''
    });
    const [quoteList, setQuoteList] = useState([]);

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
                });
                const productsData = await productsResponse.json();
                setProducts(productsData);

                // Obtener cotizaciones
                const quotesResponse = await fetch('http://localhost:4000/quote', {
                    method: 'GET',
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                });
                const quotesData = await quotesResponse.json();
                setQuoteList(quotesData);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        fetchData();
    }, [quoteCreated]); // Actualiza la lista de cotizaciones cuando se crea una nueva

    const handleClientChange = (event) => {
        setSelectedClient(event.target.value);
    }

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQuoteData({
            ...quoteData,
            [name]: value
        });
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
            });

            if (response.ok) {
                setQuoteCreated(!quoteCreated); // Cambia el estado para actualizar la lista de cotizaciones
            } else {
                console.error('No se pudo crear la cotización');
            }
        } catch (error) {
            console.error('Error al crear cotización:', error);
        }
    }

    const deleteQuote = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/quote/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            });

            if (response.ok) {
                setQuoteCreated(!quoteCreated); // Cambia el estado para actualizar la lista de cotizaciones
            } else {
                console.error('No se pudo eliminar la cotización');
            }
        } catch (error) {
            console.error('Error al eliminar cotización:', error);
        }
    }

    return (
        <div className="container mt-5">
            <div className="text-white p-5">
                <h2 className="text-center font-weight-normal"><strong>Página de cotizaciones</strong></h2>

                <form className="row g-3">
                    <div className="col-md-6">
                        <select id="clientSelect" className="form-select" onChange={handleClientChange}>
                            <option value="">Seleccione un cliente</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>{client.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-6">
                        <select id="productSelect" className="form-select" onChange={handleProductChange}>
                            <option value="">Seleccione un producto</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.title} -- (${product.price})</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-6">
                        <input 
                            type="number" 
                            className="form-control"
                            id="inputCant" 
                            placeholder="Cantidad"
                            name="cant" 
                            value={quoteData.cant} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="col-md-6">
                        <input 
                            type="number" 
                            className="form-control"
                            id="inputPrice" 
                            placeholder="Precio"
                            name="price" 
                            value={quoteData.price} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="col-12">
                        <input 
                            className="form-control"
                            id="inputDescription" 
                            placeholder="Descripción"
                            name="description" 
                            value={quoteData.description} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="col-md-6">
                        <input 
                            type="number" 
                            className="form-control"
                            id="inputSubtotal" 
                            placeholder="SubTotal"
                            name="subtotal" 
                            value={quoteData.subtotal} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="col-md-6">
                        <input 
                            type="number" 
                            className="form-control"
                            id="inputshippingPrice" 
                            placeholder="Precio Envío"
                            name="shippingPrice" 
                            value={quoteData.shippingPrice} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="col-md-6">
                        <input 
                            type="number" 
                            className="form-control"
                            id="inputTotal" 
                            placeholder="Total"
                            name="total" 
                            value={quoteData.total} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="col-12">
                        <button 
                            className="btn btn-primary" 
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

                <div className="row mt-3">
                    {/* Renderiza las tarjetas de cotización */}
                    {quoteList.map(quote => (
                        <div key={quote.id} className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cotización #{quote.id}</h5>
                                    <p className="card-text">Cantidad: {quote.cant}</p>
                                    <p className="card-text">Precio: {quote.price}</p>
                                    <p className="card-text">Descripción: {quote.description}</p>
                                    <p className="card-text">Subtotal: {quote.subtotal}</p>
                                    <p className="card-text">Precio Envío: {quote.shippingPrice}</p>
                                    <p className="card-text">Total: {quote.total}</p>
                                    <p className="card-text">Cliente: {clients.find(client => client.id === quote.clientId)?.name}</p>
                                    <button className="btn btn-danger mr-2" onClick={() => deleteQuote(quote.id)}>Eliminar</button>
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

export default Quote;
