<template>
    <div class="row">
        
        <div class="col">
          <button @click="agregar">Agregar Usuario</button>  
        </div>
        <div class="col">
           codigo<input type="text" v-model="usuario.codigo">
        </div>
        <div class="col">
            descripcion <input type="text" v-model="usuario.desc">
        </div>
        <div class="col">
            <h1>{{ listaUsuarios}}</h1>  
        </div>
        
        
        
    </div>
</template>
<script>
import { useStore} from '../stores/storeUsuarios.js';
import { storeToRefs } from 'pinia'

export default {
    setup(){
    const store = useStore();
    const { listaUsuarios } = storeToRefs(store)
    return {
        store, listaUsuarios
        };
    },
    data(){
        return{
            usuario: {codigo:0,desc:""}
        }
    },
    methods: {
        agregar(){
            
            this.store.agregarUsuario({...this.usuario});
        }
    }
};
</script>
