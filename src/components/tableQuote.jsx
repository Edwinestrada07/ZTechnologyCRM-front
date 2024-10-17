import React from 'react';

const TableQuote = ({ clients, quoteList, deleteQuote, updateQuote }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-3">
            {quoteList.map(quote => (
                <div key={quote.id} className="bg-gray-100 text-gray-600 font-medium border-b">
                    <div className="card-body">
                        <h3 className="px-4 py-3 text-center"><strong>Cotización #{quote.id}</strong></h3>
                        {['product', 'cant', 'price', 'description', 'subtotal', 'shippingPrice', 'total'].map(field => (
                            <p key={field} className="py-1 px-2">{`${field}: ${quote[field]}`}</p>
                        ))}
                        <p className="py-1 px-2">Cliente: {clients.find(client => client.id === quote.clientId)?.name || 'N/A'}</p>
                        <div className="d-flex justify-content-around">
                            <button onClick={() => updateQuote(quote.id)} className="mx-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded">Actualizar</button>
                            <button onClick={() => deleteQuote(quote.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TableQuote;
