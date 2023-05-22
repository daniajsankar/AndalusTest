import Toast from 'react-native-toast-message';
const axios = require('axios');

const baseUrl = 'https://api.thecatapi.com/v1/';

const apiKey = "live_vjDNboS7uOwHP61R1CNLRQ0qKLFbImULTRol4OB6OEdCfV2NBjMs4LFS0YKOBnzh";

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        const originalRequest = error.config;
        if (!originalRequest._retry) {
            if (!error.response) return;
            let message = error.response.data.message;
            if (error.response.data.errors) {
                message = '';
                Object.keys(error.response.data.errors).map((key) => {
                    message += error.response.data.errors[key].join('\n');
                });
            }
            Toast.show({
                type: 'error',
                text2: message,
            });
        }
    }
);

export default {
    get_categories: () => {
        return axios({
            url: `${baseUrl}categories`,
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'x-api-key': apiKey,
            },
        });
    },
}

