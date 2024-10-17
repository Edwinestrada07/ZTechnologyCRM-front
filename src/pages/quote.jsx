import { useState, useEffect } from 'react';
import FormQuote from '../components/formQuote';
import TableQuote from '../components/tableQuote';

const QuotePage = () => {
    const [data, setData] = useState({
        clients: [],
        products: [],
        quotes: [],
    });
    const [formState, setFormState] = useState({
        selectedClient: '',
        selectedProduct: '',
        isEdit: false,
        quoteData: {
            product: '',
            cant: '',
            price: '',
            description: '',
            subtotal: '',
            shippingPrice: '',
            total: ''
        }
    });
    const [quoteCreated, setQuoteCreated] = useState(false);

    const fetchData = async () => {
        try {
            const [clientsData, productsData, quotesData] = await Promise.all([
                fetch('http://localhost:4000/client', {
                    headers: { authorization: localStorage.getItem('token') }
                }).then(res => res.json()),
                fetch('http://localhost:4000/product', {
                    headers: { authorization: localStorage.getItem('token') }
                }).then(res => res.json()),
                fetch('http://localhost:4000/quote', {
                    headers: { authorization: localStorage.getItem('token') }
                }).then(res => res.json()),
            ]);
            setData({ clients: clientsData, products: productsData, quotes: quotesData });
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [quoteCreated]);

    const handleSubmit = async () => {
        const url = formState.isEdit ? `http://localhost:4000/quote/${formState.quoteData.id}` : 'http://localhost:4000/quote';
        const method = formState.isEdit ? 'PUT' : 'POST';
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify({
                    clientId: formState.selectedClient,
                    productId: formState.selectedProduct,
                    ...formState.quoteData
                })
            });
            if (response.ok) {
                setQuoteCreated(!quoteCreated);
            } else {
                console.error('No se pudo procesar la cotización');
            }
        } catch (error) {
            console.error('Error al procesar cotización:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/quote/${id}`, {
                method: 'DELETE',
                headers: { authorization: localStorage.getItem('token') }
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'clientId' || name === 'productId') {
            setFormState(prev => ({
                ...prev,
                [name === 'clientId' ? 'selectedClient' : 'selectedProduct']: value
            }));
        } else {
            setFormState(prev => ({
                ...prev,
                quoteData: { ...prev.quoteData, [name]: value }
            }));
        }
    };

    return (
        <div className="container">
            <div className="text-white p-5">
                <h2 className="text-gray-800 text-center text-3xl my-3 font-extrabold sm:text-4xl">
                    <strong>Página de Cotizaciones</strong>
                </h2>
                <p className="text-gray-600 my-2">Formulario para generar cotizaciones.</p>
                <FormQuote
                    onSubmit={handleSubmit}
                    onChangeData={handleChange}
                    onClear={() => setFormState({ selectedClient: '', selectedProduct: '', isEdit: false, quoteData: {} })}
                    isCreating={!formState.isEdit}
                    quoteData={formState.quoteData}
                    clients={data.clients}
                    products={data.products}
                />
                <TableQuote
                    clients={data.clients}
                    quoteList={data.quotes}
                    deleteQuote={handleDelete}
                    updateQuote={quoteId => setFormState({
                        ...formState,
                        isEdit: true,
                        quoteData: data.quotes.find(quote => quote.id === quoteId)
                    })}
                />
            </div>
        </div>
    );
};

export default QuotePage;
