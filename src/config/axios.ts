import axios from 'axios';
import { redirect } from "react-router-dom";


const SetupInterceptors = () => {
    axios.interceptors.response.use(
        (response) => {
            if (response.status === 401 || (response.data && response.data.message === 'Invalid Signatureinv4')) {
                redirect('/');
                window.location.reload();
            }
            return response;
        },
        (error) => {
            if (error.response.status === 401 || error.message === 'Invalid Signatureinv4') {
                redirect('/');
                window.location.reload();
            }
            return Promise.reject(error);
        }
    );
};

export default SetupInterceptors;

export const axiosConfig = async (config:any) => axios(config);
