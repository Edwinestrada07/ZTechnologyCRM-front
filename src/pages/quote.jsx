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
        total: ''
    });

    useEffect(() => {
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
                console.error("Error al obtener clientes:", error); // Corregido aquí
            }
        }
        
        const getProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/product', {
                    method: 'GET',
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                });
                const products = await response.json();
                setProducts(products);
            } catch (error) {
                console.error('Error al obtener productos:', error); // Corregido aquí
            }
        }
        

        getClients();
        getProducts();
    }, []);

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
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    clientId: selectedClient,
                    productId: selectedProduct,
                    ...quoteData
                })
            });

            if (response.ok) {
                setQuoteCreated(true);
            } else {
                console.error('No se pudo crear la cotización');
            }
        } catch (error) {
            console.error('Error al crear cotización:', error);
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
                                <option key={client.id} value={client.id}>{client.name} -- {client.phone}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-6">
                        <select id="productSelect" className="form-select" onChange={handleProductChange}>
                            <option value="">Seleccione un producto</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.title} -- ${product.price}</option>
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
                        <textarea 
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
            </div>
        </div>  
    )
}

export default Quote;
