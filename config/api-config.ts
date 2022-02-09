import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://maqe.github.io/json'
})

export default instance