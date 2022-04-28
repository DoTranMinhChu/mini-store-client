import axios from 'axios';

const URL = 'https://dtmchu-ministore.herokuapp.com'



export const fetchProducts = () => axios.get(`${URL}/api/product`)



