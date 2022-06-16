import axios from 'axios'

const apiTurnos = axios.create({
    baseURL: 'http://localhost:3001',
    headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getTurnos(){
        return apiTurnos.get('/api/getlistaTurnos')
    }
}