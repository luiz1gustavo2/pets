import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'https://adote-um-pet-hazel.vercel.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

