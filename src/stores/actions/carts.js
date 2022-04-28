import {
    REMOVE_TO_CART,
    INCREASE_QUANTITY_PRODUCT,
    DECREASE_QUANTITY_PRODUCT,
    CHECKOUT,
    ADD_TO_CART
} from "../../constant/cartConstant"


export const RemoveProductToCart = (product) => (dispatch) => {
    dispatch({ type: REMOVE_TO_CART, payload: product })
}
export const IncreaseQuantityProduct = (product) => (dispatch) => {
    dispatch({ type: INCREASE_QUANTITY_PRODUCT, payload: product })
}
export const DecreaseQuantityProduct = (product) => (dispatch) => {
    dispatch({ type: DECREASE_QUANTITY_PRODUCT, payload: product })
}
export const Checkout = () => (dispatch) => {
    dispatch({ type: CHECKOUT })
}
export const AddCart = (data) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: data });
}