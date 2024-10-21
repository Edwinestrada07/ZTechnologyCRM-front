import React, { useEffect, useState } from "react";

function FormQuote({ onSubmit, onChangeData, onClear, isCreating, quoteData, clients, products }) {
    const [productData, setProductData] = useState({
        productId: '',
        cant: '',
        price: '',
        subtotal: 0,
        shippingPrice: '',
        total: 0
    });

    useEffect(() => {
        const { cant, price, shippingPrice } = productData;
        const subtotal = cant * price;
        const total = subtotal + Number(shippingPrice);
        setProductData(prevData => ({
            ...prevData,
            subtotal,
            total
        }));
    }, [productData.cant, productData.price, productData.shippingPrice, productData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData(prevData => ({ ...prevData, [name]: value }));
        onChangeData(e);  // Sincroniza con los datos de formulario
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { clientId } = quoteData;
        const { productId, cant, price } = productData;

        if (!clientId || !productId || cant <= 0 || price <= 0) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        onSubmit({
            ...quoteData,
            ...productData
        });
    };

    return (
        <form onSubmit={handleSubmit} className="text-gray-600 d-flex flex-wrap align-items-center">
            <div className="m-2 flex-grow-1">
                <select
                    name="clientId"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    onChange={onChangeData}
                    value={quoteData.clientId}
                >
                    <option value="">Seleccione un Cliente</option>
                    {clients.map(client => (
                        <option key={client.id} value={client.id}>
                            {client.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="m-2 flex-grow-1">
                <select
                    name="productId"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    onChange={handleChange}
                    value={productData.productId}
                >
                    <option value="">Seleccione un Producto</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>
                            {product.title} -- (${product.price})
                        </option>
                    ))}
                </select>
            </div>

            <div className="m-2 flex-grow-1">
                <input 
                    type="number" 
                    name="cant" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    placeholder="Cantidad" 
                    value={productData.cant || ''} 
                    onChange={handleChange} 
                />
            </div>

            <div className="m-2 flex-grow-1">
                <input 
                    type="number" 
                    name="price" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    placeholder="Precio por Unidad" 
                    value={productData.price || ''} 
                    onChange={handleChange} 
                />
            </div>

            <div className="w-full lg:w-1/3 p-2">
                <input 
                    type="number" 
                    name="shippingPrice" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    placeholder="Precio de Envío" 
                    value={productData.shippingPrice || ''} 
                    onChange={handleChange} 
                />
            </div>

            <div className="m-2 flex-grow-1">
                <textarea
                    name="description"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Descripción"
                    value={quoteData.description || ''}
                    onChange={onChangeData}
                />
            </div>

            <div className="w-full lg:w-1/2 p-2">
                <label>Subtotal</label>
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200" 
                    value={productData.subtotal || ''} 
                    readOnly 
                />
            </div>

            <div className="w-full lg:w-1/2 p-2">
                <label>Total</label>
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200" 
                    value={productData.total || ''} 
                    readOnly 
                />
            </div>

            <div className="m-2 flex-grow-1">
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md"
                >
                    {isCreating ? 'Crear Cotización' : 'Actualizar Cotización'}
                </button>
                <button
                    type="button"
                    className="ml-4 px-6 py-2 bg-gray-500 text-white rounded-md"
                    onClick={onClear}
                >
                    Limpiar
                </button>
            </div>
        </form>
    );
}

export default FormQuote;
