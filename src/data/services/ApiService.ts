import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'https://adote-um-pet-hazel.vercel.app/',
    headers: {
        'Content-Type': 'application/json'
    }
})

