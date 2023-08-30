import axios from "axios";


const renderAPI: string = "https://back-bee.onrender.com/";

export const api = axios.create({
    baseURL: renderAPI,
    timeout: 5000
});