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
    
            // Datos de la tabla
            const tableData = [
                ["Producto", product ? product.title : 'No especificado'],
                ["Cantidad", selectedQuote.cant],
                ["Precio por Unidad", `$${selectedQuote.price}`],
                ["Descripción", selectedQuote.description || 'No especificada'],
                ["Subtotal", `$${selectedQuote.subtotal}`],
                ["Precio de Envío", `$${selectedQuote.shippingPrice}`],
                ["Total", `$${selectedQuote.total}`]
            ];
    
            // Crear una tabla en el PDF
            let startY = 30; // Posición inicial en el eje Y
            tableData.forEach(([label, value], index) => {
                doc.text(`${label}:`, 10, startY + (index * 10));
                doc.text(`${value}`, 80, startY + (index * 10)); // Valor en la columna derecha
            });
        }
    
        doc.save(`cotizacion_${selectedQuote.id}.pdf`);
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
                className="p-3 bg-white shadow-xl rounded-xl max-w-3xl mx-auto mt-40"
            >
                <h2 className="text-3xl font-bold mb-3 text-gray-700">Cotización Detallada</h2>

                {selectedQuote && (
                    <div className="bg-cyan-300 border rounded-lg shadow-inner p-4 mb-4">
                        <p className="text-xl font-semibold text-gray-800 mb-4">
                            Producto: {products && Array.isArray(products) ? 
                                products.find(product => product.id === selectedQuote.productId)?.title || 'No especificado' : 
                            'No especificado'}
                        </p>

                        <div className="grid grid-cols-2 gap-2">
                            {['Cantidad', 'Precio por Unidad', 'Descripción', 'Subtotal', 'Precio de Envío', 'Total'].map((label, index) => (
                                <div key={index} className="bg-white p-3 border rounded-xl">
                                    <p className="text-sm text-gray-500">{label}</p>
                                    <p className="text-lg font-medium text-gray-800">{selectedQuote[Object.keys(selectedQuote)[index + 1]] || 'No especificado'}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex justify-end space-x-4">
                    <button 
                        className="mx-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow-md transition duration-300" 
                        onClick={handlePrintPDF}
                    >
                        Imprimir PDF
                    </button>
                    <button 
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md shadow-md transition duration-300" 
                        onClick={closeModal}
                    >
                        Cerrar
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default TableQuote;
