import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {listaUsuarios: [] }
    },

    actions:{
        agregarUsuario(obj){
            this.listaUsuarios.push(obj);
        },
       
    }, 
})