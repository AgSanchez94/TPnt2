<template>

    <div style="width:70%;margin:0 auto;">
        <h3>Turnos</h3>
		<table class="table"  border="1">
		<thead>
		<tr  class="table-primary">
			<th scope="col" style="text-align: center;">Afiliado</th>
			<th scope="col" style="text-align: center;">Nombre</th>
			<th scope="col" style="text-align: center;">Apellido</th>
			<th scope="col" style="text-align: center;">DNI</th>
			<th scope="col" style="text-align: center;">Médico Nombre</th>
			<th scope="col" style="text-align: center;">Médico Apellido</th>
			<th scope="col" style="text-align: center;">Especialidad</th>
			<th scope="col" style="text-align: center;">Fecha Turno</th>
			<th scope="col" style="text-align: center;">Hora Turno</th>
		</tr>
		</thead>
		
		<tbody>
		<tr v-for=" conectarTurnos in lista" :key="conectarTurnos.id_afiliado">
		<td>{{ conectarTurnos.id_afiliado }}</td>
		<td>{{ conectarTurnos.nombreA }}</td>
		<td>{{ conectarTurnos.apellidoA }}</td>
		<td>{{ conectarTurnos.dniA }}</td>
		<td>{{ conectarTurnos.nombreM }}</td>
		<td>{{ conectarTurnos.apellidoM }}</td>
		<td>{{ conectarTurnos.especialidadM }}</td>
		<td>{{ conectarTurnos.fecha }}</td>
		<td>{{ conectarTurnos.hora }}</td>
		</tr>
		</tbody>
		</table>         
        {{mensajeError}}
        
        
        <button class="btn btn-info" @click="$router.push('/RegistrarTurno')">Alta de turno</button>
              
    </div>
	
</template>
<script>
import conectarTurnos from '../services/conectarTurnos.js'


export default {

    
    data() {
        return {       
        lista:[],
            Turnos: 
            { id_afiliado: 0, nombreA: '', apellidoA: '', dniA: 0 ,nombreM:'',
             apellidoM:'', especialidadM:'',fecha:'',hora:''},
            mensajeError: ''
        }
		
        
    },
    created: async function(){
        try{
            const rta = await conectarTurnos.getTurnos();
            this.lista = rta.data;
        } catch( error ){
            console.log (error);
            this.mensajeError = 'Se produjo un error en la conexion'
        }
    },
    methods:{

    }
}
</script>