import axios from 'axios'

const apiMedicos = axios.create({
    baseURL: 'http://localhost:3001',
    headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getMedicos(){
        return apiMedicos.get('/api/getlistaMedicos')
    },
    addMedicos(conectarMedicos){
        return apiMedicos.post('api/addMedicos', conectarMedicos)
    },
    deleteMedicos(id_matricula){
        return apiMedicos.delete('/api/deleteMedicos/'+ id_matricula)
    }
}