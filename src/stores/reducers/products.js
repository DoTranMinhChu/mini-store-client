

const initState = {
    products: []
}

const products = (state = initState, action) => {

    let { products } = state;
    let payload = action.payload;
    switch (action.type) {
        case 'FETCH_ALL':
            products = payload.data
            return { ...state, products }
       
        default:
            return state;
    }
}

export default products