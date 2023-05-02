import axios from 'axios'

export const auth = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    withCredentials:true
})



