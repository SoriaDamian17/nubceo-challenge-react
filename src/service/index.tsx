import axios from 'axios';

const axiosBase = axios.create({
    baseURL: process.env.REACT_URL_API,
    responseType: 'json',
});

const cancelSource = axios.CancelToken.source();

export {
    axiosBase,
    cancelSource,
};