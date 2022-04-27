import { ADD_TO_CART, REMOVE_TO_CART, INCREASE_QUANTITY_PRODUCT, DECREASE_QUANTITY_PRODUCT, CHECKOUT } from '../../constant/cartConstant'
import { toast } from "react-toastify";

const initState = {
    carts: []
}

const carts = (state = initState, action) => {
    let { carts } = state;
    let payload = action.payload;
    let index;
    switch (action.type) {
        case ADD_TO_CART:
            let prevProduct = carts.filter((item) => item._id === payload._id);
            if (prevProduct.length > 0) {
                index = carts.findIndex((item) => item._id === payload._id);
                carts[index].quantity = carts[index].quantity + 1;
            } else {
                payload.quantity = 1;
                carts = [...carts, payload]
            }
            toast.success('Successfully added product from cart')
            return { ...state, carts };

        case REMOVE_TO_CART:
            carts = carts.filter((item) => item._id !== payload._id)
            toast.success('Successfully removed product from cart')
            return { ...state, carts };
            
        case INCREASE_QUANTITY_PRODUCT:
            index = carts.findIndex((item) => item._id === payload._id);
            carts[index].quantity = carts[index].quantity + 1;
            return { ...state, carts };

        case DECREASE_QUANTITY_PRODUCT:
            index = carts.findIndex((item) => item._id === payload._id);
            carts[index].quantity = carts[index].quantity - 1;
            if (carts[index].quantity === 0) {
                carts = carts.filter((item) => item._id !== payload._id);
            }
            return { ...state, carts };
        case CHECKOUT:
            return { ...state, carts: [] };
        default:
            return state;
    }
}

export default carts