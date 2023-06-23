import axios from 'axios';

// const baseURL = 'http://localhost:5000/v1';
// const baseURL = 'http://172.190.148.43:5000/v1';
const baseURL = ' https://futurionic.eastus.cloudapp.azure.com/v1';

// custom instance
const customInstance = axios.create({ baseURL });

export const commonThenResult = (result) => result.data;

export default customInstance;
