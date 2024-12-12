import { useAuthContext } from "@/context";
import axios from "axios";
import Cookies from "js-cookie";

// export const AxiosHandler = axios.create({
//     baseURL: import.meta.env.VITE_APP_API_URL,
//     withCredentials: true,
//     headers: {
//         "Authorization": `Bearer ${Cookies.get("USER_DETAILS")
//             ? JSON.parse(Cookies.get("USER_DETAILS"))?.token
//             : null
//             }`
//     }
// });



// const AxiosHandler = () => {
//     const { userData } = useAuthContext();

//     function ApiCall() {
//         return axios.create({
//             baseURL: import.meta.env.VITE_APP_API_URL,
//             withCredentials: true,
//             headers: {
//                 "Authorization": `Bearer ${userData?.token ||
//                     (Cookies.get("USER_DETAILS") ?
//                         JSON.parse(Cookies.get("USER_DETAILS"))?.token : null)}`
//             }
//         });
//     }

//     return ApiCall();
// }

// export {
//     AxiosHandler
// }