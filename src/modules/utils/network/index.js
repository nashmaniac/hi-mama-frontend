import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    var token = localStorage.getItem("token");
    if(token !== null && token !== "") {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default api;