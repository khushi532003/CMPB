import axios from "axios"

export const AxiosHandler = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    withCredentials:true
})