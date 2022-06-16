<template>
  <div style="width: 70%; margin: 0 auto">
    <h2 style="color: #4d78a8">Afiliados</h2>
    <table class="table" border="1">
      <thead>
        <tr class="table-primary">
          <th scope="col" style="text-align: center">Afiliado</th>
          <th scope="col" style="text-align: center">Nombre</th>
          <th scope="col" style="text-align: center">Apellido</th>
          <th scope="col" style="text-align: center">DNI</th>
          <th scope="col" style="text-align: center"></th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="conectarAfiliados in lista"
          :key="conectarAfiliados.id_afiliado"
        >
          <td>{{ conectarAfiliados.id_afiliado }}</td>
          <td>{{ conectarAfiliados.nombreA }}</td>
          <td>{{ conectarAfiliados.apellidoA }}</td>
          <td>{{ conectarAfiliados.dniA }}</td>
          <td>
            <!--<button class="btn btn-info" @click="">Editar</button> |-->
            <button
              type="button"
              v-on:click="deleteAfiliados(conectarAfiliados.id_afiliado)"
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
            <label for="id_afiliado">AFILIADO nº:</label>
            <input
              type="text"
              class="form-control"
             
              required
              v-model="conectarAfiliados.id_afiliado"
            />
          </div>
          <div class="form-group">
            <label for="dniA">DNI:</label>
            <input
              type="text"
              class="form-control"
             
              required
              v-model="conectarAfiliados.dniA"
            />
          </div>
          <div class="form-group">
            <label for="nombreA">Nombre:</label>
            <input
              type="text"
              class="form-control"
             
              required
              v-model="conectarAfiliados.nombreA"
            />
          </div>
          <div class="form-group">
            <label for="apellidoA">Apellido:</label>
            <input
              type="text"
              class="form-control"
             
              required
              v-model="conectarAfiliados.apellidoA"
            />
          </div>
        </fieldset>
        <div>
          <button
            class="btn btn-info col text-center"
            @click="agregarAfiliado">
            Enviar Afiliado
          </button>
        </div>
        
      </form>
    </div>
    {{ mensajeError }}
  </div>
</template>
<script>
import conectarAfiliados from "../services/conectarAfiliados.js"
export default {
  data() {
    return {
      lista: [],
      
      conectarAfiliados: { id_afiliado: 0, nombreA: "", apellidoA: "", dniA: 0 },
      mensajeError: "",
    };
  },
  created: async function () {
    try {
      const rta = await conectarAfiliados.getAfiliados();
      this.lista = rta.data;
    } catch (error) {
      console.log(error);
      this.mensajeError = "Se produjo un error en la conexion";
    }
  },
  methods: {
    async agregarAfiliado() {
      const obj = { ...this.conectarAfiliados };
      this.lista.push(obj);
      try{
          const rta = await conectarAfiliados.addAfiliados(obj);
          this.lista = rta.data;
      } catch(error){
          console.log(error);
          this.mensajeError = 'Se produjo un error en la conexion'
      }
    },
    /*async*/ deleteAfiliados(id_afiliado) {
      console.log(id_afiliado);
      try {        
        const rta = /*await*/ conectarAfiliados.deleteAfiliados(id_afiliado);
        console.log(rta);
                
        const listaIdAfiliado = this.lista.map(e => {return e.id_afiliado} )
        
        const indice = listaIdAfiliado.indexOf(id_afiliado);
       
        this.lista.splice(indice,1);
      } catch( error ) {
       
        this.mensajeError = 'Se produjo un error en la conexion'
      }
  }
  }
}
</script>