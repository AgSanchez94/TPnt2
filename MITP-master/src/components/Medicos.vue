<template>
  <div style="width: 70%; margin: 0 auto">
    <h2 style="color: #4d78a8">Medicos</h2>
    <table class="table" border="1">
      <thead>
        <tr class="table-primary">
          <th scope="col" style="text-align: center">Matricula</th>
          <th scope="col" style="text-align: center">Nombre</th>
          <th scope="col" style="text-align: center">Apellido</th>
          <th scope="col" style="text-align: center">Especialidad</th>
          <th scope="col" style="text-align: center"></th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="conectarMedicos in lista"
          :key="conectarMedicos.id_matricula"
        >
          <td>{{ conectarMedicos.id_matricula}}</td>
          <td>{{ conectarMedicos.nombreM }}</td>
          <td>{{ conectarMedicos.apellidoM }}</td>
          <td>{{ conectarMedicos.especialidad }}</td>
          <td>
            <!--<button class="btn btn-info" @click="">Editar</button> |-->
            <button
              type="button"
              v-on:click="borrarMedico(conectarMedicos.id_matricula)"
              class="btn btn-danger"
            >
              Borrar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="margin: 0 auto">
      <form>
        <!-- action="codigo.php" method="POST" style="width:60%;margin:0 auto;"-->

        <div style="margin: 0 auto">
          <h3 id="app" style="color: #4d78a8">Alta:</h3>
        </div>

        <div class="page-header bg-info text-white text-center">
          <span class="h3"></span>
        </div>

        <fieldset>
          <div class="form-group">
            <label for="id_matricula">Matricula nº:</label>
            <input
              type="text"
              class="form-control"
             
              required
              v-model="conectarMedicos.id_matricula"
            />
            </div>
          <div class="form-group">
            <label for="nombreM">Nombre:</label>
            <input
              type="text"
              class="form-control"
             
              required
              v-model="conectarMedicos.nombreM"
            />
          </div>
          <div class="form-group">
            <label for="apellidoM">Apellido:</label>
            <input
              type="text"
              class="form-control"
             
              required
              v-model="conectarMedicos.apellidoM"
            />
          </div>
        </fieldset>
        <div>
          <button
            class="btn btn-info col text-center"
            @click="agregarMedico">
            Enviar Medico
          </button>
        </div>
      </form>
    </div>
    {{ mensajeError }}
  </div>
</template>
<script>
import conectarMedicos from "../services/conectarMedicos.js";
export default {
  data() {
    return {
      lista: [],
      
      conectarMedicos: { id_matricula: 0, nombreM: "", apellidoM: "", Especialidad: "" },
      mensajeError: "",
    };
  },
  created: async function () {
    try {
      const rta = await conectarMedicos.getMedicos();
      this.lista = rta.data;
    } catch (error) {
      console.log(error);
      this.mensajeError = "Se produjo un error en la conexion";
    }
  },
  methods: {
    async agregarMedico() {
      const obj = { ...this.conectarMedicos };
      this.lista.push(obj);
    try{
          const rta = await conectarMedicos.addMedicos(obj);
          //this.lista = rta.data;
      } catch(error){
          console.log(error);
          this.mensajeError = 'Se produjo un error en la conexion'
      }
    },
    async borrarMedico(id_matricula) {
      try {        
        const rta = await conectarMedicos.deleteMedicos(id_matricula);
        
        console.log(id_matricula);
        const listaIdMedico = this.lista.map(e => {return e.id_matricula} )
        
        const indice = listaIdMedico.indexOf(id_matricula);
       
        this.lista.splice(indice,1);
      } catch( error ) {
       
        this.mensajeError = 'Se produjo un error en la conexion'
      }
  }
  }
}
</script>
