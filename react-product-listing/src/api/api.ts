import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Use the base URL from .env
});

// Function to fetch products
export const fetchProducts = async () => {
    const response = await api.get('/products');
    return response.data.products; // Return the products
};
