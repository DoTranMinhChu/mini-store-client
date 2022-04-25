const initState = {
    user: {

    },
    infomation: {
    }
}

const auth = (state = initState, action) => {
    let { carts } = state;
    let payload = action.payload;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log("addd : ", payload)
            let prevProduct = carts.filter((item) => item.id === payload.id);
            if (prevProduct.length > 0) {
                index = carts.findIndex((item) => item.id === payload.id);
                carts[index].quantity = carts[index].quantity + 1;
            } else {
                payload.quantity = 1;
                carts = [...carts, payload]
            }

            return { ...state, carts };
        case 'REMOVE_TO_CART':
            carts = carts.filter((item) => item.id !== payload.id)
            return { ...state, carts };
        case 'INCREASE_QUANTITY_PRODUCT':
            index = carts.findIndex((item) => item.id === payload.id);
            carts[index].quantity = carts[index].quantity + 1;
            return { ...state, carts };
        case 'DECREASE_QUANTITY_PRODUCT':
            index = carts.findIndex((item) => item.id === payload.id);
            carts[index].quantity = carts[index].quantity - 1;
            if (carts[index].quantity === 0) {
                carts = carts.filter((item) => item.id !== payload.id)

            }
            return { ...state, carts };

        case 'CHECKOUT':
            carts = [];

            return { ...state, carts };
        default:
            return state;
    }
}

export default auth