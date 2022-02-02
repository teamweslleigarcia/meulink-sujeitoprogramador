import axios from "axios";

//miha chave bit.ly: 484bd7c25a36aa057e6085c46d0a2cb21cfc273a

export const key = '484bd7c25a36aa057e6085c46d0a2cb21cfc273a'

const api = axios.create({
    baseURL : 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Autorization': `Bearer ${key}`
    }
})

export default api;