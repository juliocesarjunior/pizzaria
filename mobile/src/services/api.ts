import axios from "axios";

const api = axios.create({
    //baseURL: 'http://10.86.31.207:3333'
    baseURL: 'http://192.168.18.6:3333'
})

export {api};