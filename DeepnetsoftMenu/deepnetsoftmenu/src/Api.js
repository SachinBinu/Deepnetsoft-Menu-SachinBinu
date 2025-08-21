import axios from 'axios';

const api = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000, // Optional: set a timeout for this instance
    });


export default api;