import * as api from '../../utils/api'

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts()
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error)
    }

}

export const addCart = (data) => (dispatch) => {
    dispatch({ type: 'ADD_TO_CART', payload: data });
}