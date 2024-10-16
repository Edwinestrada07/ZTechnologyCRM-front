import React, { useState, useEffect } from "react";
import Modal from "react-modal";

// Establecer el elemento raíz para el modal
Modal.setAppElement('#root'); // Asegúrate de que '#root' sea el ID de tu elemento raíz

const TableQuote = ({ clients = [], quoteList = [], deleteQuote, updateQuote, description }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedQuote, setSelectedQuote] = useState(null);

    const openModal = (quote) => {
        setSelectedQuote(quote);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedQuote(null);
    };

    return (
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="border border-gray-300 py-3 px-6">Cliente</th>
                        <th className="border border-gray-300 py-3 px-6">Productos</th>
                        <th className="border border-gray-300 py-3 px-6">Acciones</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                    {quoteList.map((quote) => (
                        <tr key={quote.id}>
                            <td className="border border-gray-300 px-6 py-4 whitespace-nowrap">
                                {clients.find(client => client.id === quote.clientId)?.name || 'Desconocido'}
                            </td>
                            <td className="border border-gray-300 px-6 py-4 whitespace-nowrap">
                                {Array.isArray(quote.products) && quote.products.length > 0 ? (
                                    quote.products.map(product => (
                                        <div key={product.productId}>
                                            {product.title} - Cantidad: {product.cant} - PrecioXUnidad: {product.price} - 
                                            SubTotal: {product.subtotal} - Precio Envío: {product.shippingPrice} - Total: {product.total}
                                        </div>
                                    ))
                                ) : (
                                    <p>No hay productos en la cotización.</p>
                                )}
                            </td>
                            <td className="border border-gray-300 px-6 py-4 whitespace-nowrap">
                                <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-200 rounded-lg" onClick={() => updateQuote(quote.id)}>Actualizar</button>
                                <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-200 rounded-lg" onClick={() => deleteQuote(quote.id)}>Eliminar</button>
                                <button className="py-2 leading-none px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-200 rounded-lg" onClick={() => openModal(quote)}>Ver</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Cotización Detallada">
                <h2 className="text-lg font-bold mb-4">Cotización Detallada</h2>
                {selectedQuote && (
                    <div>
                        <h3>Cliente: {clients.find(client => client.id === selectedQuote.clientId)?.name || 'Desconocido'}</h3>
                        <h4>Productos:</h4>
                        {Array.isArray(selectedQuote.products) && selectedQuote.products.length > 0 ? (
                            selectedQuote.products.map(product => (
                                <div key={product.productId}>
                                    {product.title} - Cantidad: {product.cant} - PrecioXUnidad: {product.price} - 
                                    SubTotal: {product.subtotal} - Precio Envío: {product.shippingPrice} - Total: {product.total}
                                </div>
                            ))
                        ) : (
                            <p>No hay productos en esta cotización.</p>
                        )}
                        <h4>Descripción: {description}</h4>
                    </div>
                )}
                <button className="mt-4 py-2 px-4 bg-gray-300 rounded-lg" onClick={closeModal}>Cerrar</button>
            </Modal>
        </div>
    );
};

export default TableQuote;
