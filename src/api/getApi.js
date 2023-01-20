import axios from 'axios'

export const getApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
})