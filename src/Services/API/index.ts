// #region Global Imports
import axios from 'axios';
// #endregion Global Imports

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong',
        ),
);

export default axiosInstance;
