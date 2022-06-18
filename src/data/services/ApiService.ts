import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'http://127.0.0.1:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

