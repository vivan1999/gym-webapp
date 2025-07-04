import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const service_url = "https://gym-webapp-production.up.railway.app"
const api = axios.create({baseURL:import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL: service_url})

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default api