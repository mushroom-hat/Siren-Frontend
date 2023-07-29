import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'https://siren-api.mushroomhat.co'
});

export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:5000',
    // baseURL: 'https://siren-api.mushroomhat.co',
    headers: {
        'Content-Type': 'application/json',
        withCredentials: true
    }
});