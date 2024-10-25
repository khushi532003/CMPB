import axios from "axios";
import Cookies from "js-cookie";


export const AxiosHandler = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    withCredentials:true,
    headers:{
        "Authorization": `Bearer ${Cookies.get("CMPB_TOKEN") }`
    }
})
