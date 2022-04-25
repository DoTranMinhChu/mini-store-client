import axios from 'axios';

const URL = 'http://localhost:5000'



export const fetchProducts = () => axios.get(`${URL}/api/product`)



