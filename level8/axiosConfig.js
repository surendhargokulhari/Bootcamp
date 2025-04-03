import axios from 'axios';
import { store } from './store'; // Redux Store or simple context-based store (discussed below)
import { setLoading } from './loadingSlice'; // Redux action or simple context-based action

// Create Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    config => {
        // Add Authorization header to every request
        config.headers['Authorization'] = 'Bearer your_token_here';
        
        // Set global loading state to true
        store.dispatch(setLoading(true));
        
        return config;
    },
    error => {
        store.dispatch(setLoading(false));
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    response => {
        store.dispatch(setLoading(false));
        console.log('Response Data:', response.data); // Log response data
        return response;
    },
    error => {
        store.dispatch(setLoading(false));
        
        if (error.response) {
            const { status } = error.response;
            if (status === 401) alert('Unauthorized! Please log in.');
            if (status === 404) alert('Resource not found!');
            if (status === 500) alert('Server Error! Please try again later.');
        }
        
        return Promise.reject(error);
    }
);

export default axiosInstance;
