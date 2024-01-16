function ProductReducer (state, action) {
    switch (action.type) {
        case 'loading':
            return {
                products: state.products, 
                status: 'loading'    
            }
        case 'error':
            return {
                products: state.products, 
                status: 'error'
            }
        case 'success':
            return {
                products: action.data,
                status: 'success'
            } 
        case 'createProduct':
            return {
                products: [
                    ...state.products,
                    action.product
                ],
                status: 'success'
            }
        default:
            break 
    }
}

export default ProductReducer