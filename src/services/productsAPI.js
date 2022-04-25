
import axios from 'axios';
const URL = 'http://localhost:5000'

const productAPI = {
    getAll: async () => {
        return axios.get(`${URL}/api/product`);
    },
    getSize: async () => {
        return axios.get(`${URL}/api/product`);

    }


}
export default productAPI;
