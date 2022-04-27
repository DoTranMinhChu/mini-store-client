import * as api from '../../utils/api'
import { FETCH_ALL } from '../../constant/productConstant';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts()
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error)
    }

}

