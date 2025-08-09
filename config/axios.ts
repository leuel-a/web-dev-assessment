import axios from 'axios';

const BASE_URL = 'https://6852821e0594059b23cdd834.mockapi.io';

const axiosInstance = axios.create({baseURL: BASE_URL});
export default axiosInstance;
