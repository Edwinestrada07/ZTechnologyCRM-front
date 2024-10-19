import React, { useState } from 'react';
import Modal from "react-modal";
import { jsPDF } from 'jspdf';

const TableQuote = ({ clients, products, quoteList, deleteQuote, updateQuote }) => {
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

    const handlePrintPDF = () => {
        const doc = new jsPDF();
        doc.text("Cotización Detallada", 10, 10);
        if (selectedQuote) {
            const product = products.find(product => product.id === selectedQuote.productId);
            doc.text(`Producto: ${product ? product.title : 'No especificado'}`, 10, 20);
            // Agrega más detalles de la cotización según sea necesario
        }
        doc.save(`cotizacion_${selectedQuote.id}.pdf`);
    };

    const handleDownloadFile = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(selectedQuote)], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `cotizacion_${selectedQuote.id}.txt`; // Cambia a .csv si es necesario
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6 text-center">Nº</th>
                        <th className="py-3 px-6">Cliente</th>
                        <th className="py-3 px-6">Cotización</th>
                        <th className="py-3 px-6"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                    {quoteList.map(quote => (
                        <tr key={quote.id}>
                            <td className="px-6 py-3 whitespace-nowrap">
                                <h3 className="px-4 text-center"><strong>{quote.id}</strong></h3>
                            </td>
                            <td className="px-6 py-3 whitespace-nowrap">
                                {clients.find(client => client.id === quote.clientId)?.name || 'Desconocido'}
                            </td>
                            <td className="px-6 py-3 whitespace-nowrap">
                                <button 
                                    className="py-1 leading-none px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-200 rounded-lg" 
                                    onClick={() => openModal(quote)}
                                >
                                    Ver
                                </button>  
                            </td>
                            <td>
                                <button 
                                    onClick={() => deleteQuote(quote.id)} 
                                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-200 rounded-lg"
                                >
                                    Eliminar
                                </button>
                                <button 
                                    onClick={() => updateQuote(quote.id)} 
                                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-200 rounded-lg"
                                >
                                    Actualizar
                                </button>
                            </td>         
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                contentLabel="Cotización Detallada" 
                className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-20"
            >
                <h2 className="text-2xl font-bold mb-4">Cotización Detallada</h2>
                {selectedQuote && (
                    <div className="bg-gray-100 text-gray-600 font-medium border-b">
                        <div className="card-body">
                            {['cant', 'price', 'description', 'subtotal', 'shippingPrice', 'total'].map(field => (
                                <p key={field} className="py-1 px-2">{`${field}: ${selectedQuote[field]}`}</p>
                            ))}
                            {/* Mostrar el nombre del producto */}
                            <p className="py-1 px-2">
                                Producto: {products && Array.isArray(products) ? 
                                    products.find(product => product.id === selectedQuote.productId)?.title || 'No especificado' : 
                                    'No especificado'}
                            </p>
                        </div>
                    </div>
                )}
                <button 
                    className="mt-4 py-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg" 
                    onClick={closeModal}
                >
                    Cerrar
                </button>
                <button 
                    className="mt-2 ml-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg" 
                    onClick={handlePrintPDF}
                >
                    Imprimir PDF
                </button>
                <button 
                    className="mt-2 ml-2 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg" 
                    onClick={handleDownloadFile}
                >
                    Descargar Archivo
                </button>
            </Modal>
        </div>
    );
};

export default TableQuote;
