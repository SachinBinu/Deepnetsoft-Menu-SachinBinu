import axios from 'axios';

const api = axios.create({
        baseURL: 'https://deepnetsoft-menu-sachin-binu-mfhn.vercel.app',
        timeout: 10000, // Optional: set a timeout for this instance
    });


export default api;