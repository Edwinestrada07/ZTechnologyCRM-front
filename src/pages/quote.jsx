import { useState, useEffect } from 'react';
import FormQuote from '../components/formQuote';
import TableQuote from '../components/tableQuote';

const QuotePage = () => {
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');
    const [quoteCreated, setQuoteCreated] = useState(false);
    const [isEditQuote, setIsEditQuote] = useState(false);
    const [quoteData, setQuoteData] = useState({
        clientId: '',
        products: [],
        subtotal: 0,
        shippingPrice: 0,
        total: 0,
        description: ''
    });
    const [quoteList, setQuoteList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientsResponse = await fetch('http://localhost:4000/client', {
                    method: 'GET',
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                });
                const clientsData = await clientsResponse.json();
                setClients(clientsData);

                const productsResponse = await fetch('http://localhost:4000/product', {
                    method: 'GET',
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                });
                const productsData = await productsResponse.json();
                setProducts(productsData);

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
    }, [quoteCreated]);

    const createQuote = async () => {
        try {
            const response = await fetch('http://localhost:4000/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(quoteData)
            });

            if (response.ok) {
                setQuoteCreated(!quoteCreated);
                onClear();  // Limpiar el formulario después de crear
            } else {
                console.error('No se pudo crear la cotización');
            }
        } catch (error) {
            console.error('Error al crear cotización:', error);
        }
    };

    const updateQuote = async (quote) => {
        try {
            const response = await fetch(`http://localhost:4000/quote/${quote.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(quote)
            });
            setQuoteCreated(!quoteCreated);
            console.log('Cotización actualizada:', await response.json());

        } catch (error) {
            console.error('Error al actualizar cotización', error);
        }
    };

    const deleteQuote = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/quote/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            });

            if (response.ok) {
                setQuoteCreated(!quoteCreated);
            } else {
                console.error('No se pudo eliminar la cotización');
            }
        } catch (error) {
            console.error('Error al eliminar cotización:', error);
        }
    };

    const onChangeData = (event) => {
        const { name, value } = event.target;
        setQuoteData({
            ...quoteData,
            [name]: value
        });
    };

    const addProductToQuote = (productData) => {
        setQuoteData(prevData => ({
            ...prevData,
            products: [...prevData.products, productData],
            subtotal: prevData.subtotal + productData.subtotal,
            total: prevData.total + productData.total
        }));
    };

    const onClear = () => {
        setQuoteData({
            clientId: '',
            products: [],
            subtotal: 0,
            shippingPrice: 0,
            total: 0,
            description: ''
        });
        setIsEditQuote(false);
    };

    return (
        <div className="container">
            <div className="text-white p-5">
                <h2 className="text-gray-800 text-center text-3xl my-3 font-extrabold sm:text-4xl"><strong>Página de Cotizaciones</strong></h2>
                <p className="text-gray-600 my-2">A continuación el formulario para generar las cotizaciones.</p>
                <FormQuote 
                    onSubmit={createQuote} 
                    onChangeData={onChangeData} 
                    addProductToQuote={addProductToQuote}
                    quoteData={quoteData} 
                    clients={clients} 
                    products={products} 
                    onClear={onClear} 
                />
                <TableQuote 
                    clients={clients} 
                    quoteList={quoteList} 
                    updateQuote={updateQuote} 
                    deleteQuote={deleteQuote} 
                />
            </div>
        </div>
    );
};

export default QuotePage;
