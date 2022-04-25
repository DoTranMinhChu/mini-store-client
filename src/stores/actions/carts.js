
export const RemoveProductToCart = (product) => (dispatch) => {
    dispatch({ type: 'REMOVE_TO_CART', payload: product })
}
export const IncreaseQuantityProduct = (product) => (dispatch) => {
    dispatch({ type: 'INCREASE_QUANTITY_PRODUCT', payload: product })
}
export const DecreaseQuantityProduct = (product) => (dispatch) => {
    dispatch({ type: 'DECREASE_QUANTITY_PRODUCT', payload: product })
}
export const Checkout = () => (dispatch) => {
    dispatch({ type: 'CHECKOUT'})
}