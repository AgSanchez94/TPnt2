<template>
  <div style="width:60%;margin:0 auto;">

    <form>
      <!-- action="codigo.php" method="POST" style="width:60%;margin:0 auto;"-->

      <div>
        <h1 id="app" style="color: #4d78a8">Alta de Turno</h1>
      </div>

      <div class="page-header bg-info text-white text-center">
        <span class="h3"></span>
      </div>

      <fieldset>
        <div class="form-group">
          <label >Afiliado nº:</label>
          <input
            type="text"
            class="form-control"
            name="Afiliado"
            style="font-size: 30px"
            v-model="miTurno.id_afiliado"
          />
        </div>

        <div class="form-group">
          <label >Médico Matricula:</label>
          <input type="text" class="form-control" name="matricula" v-model="matriculaMed.matri" required />
        </div>
        <div class="form-group">
          <label >Fecha del turno:</label>
          <div class="row">
            <div class="col">
              <label >Día:</label>
              <select type="text" class="form-control" name="dia" v-model="miFecha.dia">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>

            <div class="col">
              <label >Mes:</label>
              <select type="text" class="form-control" name="mes" v-model="miFecha.mes">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="col">
              <label >Año:</label>
              <select type="text" class="form-control" name="anio" v-model="miFecha.anio">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label >Hora turno:</label>
          <select type="text" class="form-control" name="desde" v-model="miTurno.hora">
            <option value="0800">08:00</option>
            <option value="0815">08:15</option>
            <option value="0830">08:30</option>
            <option value="0845">08:45</option>
            <option value="0900">09:00</option>
            <option value="0915">09:15</option>
            <option value="0930">09:30</option>
            <option value="0945">09:45</option>
            <option value="1000">10:00</option>
            <option value="1015">10:15</option>
            <option value="1030">10:30</option>
            <option value="1045">10:45</option>
            <option value="1100">11:00</option>
            <option value="1115">11:15</option>
            <option value="1130">11:30</option>
            <option value="1145">11:45</option>
            <option value="1200">12:00</option>
            <option value="1215">12:15</option>
            <option value="1230">12:30</option>
            <option value="1245">12:45</option>
            <option value="1300">13:00</option>
            <option value="1315">13:15</option>
            <option value="1330">13:30</option>
            <option value="1345">13:45</option>
            <option value="1400">14:00</option>
            <option value="1415">14:15</option>
            <option value="1430">14:30</option>
            <option value="1445">14:45</option>
            <option value="1500">15:00</option>
            <option value="1515">15:15</option>
            <option value="1530">15:30</option>
            <option value="1545">15:45</option>
            <option value="1600">16:00</option>
            <option value="1615">16:15</option>
            <option value="1630">16:30</option>
            <option value="1645">16:45</option>
            <option value="1700">17:00</option>
            <option value="1715">17:15</option>
            <option value="1730">17:30</option>
            <option value="1745">17:45</option>
            <option value="1800">18:00</option>
            <option value="1815">18:15</option>
            <option value="1830">18:30</option>
            <option value="1845">18:45</option>
            <option value="1900">19:00</option>
          </select>
        </div>
        <div class="form-group">
          <button class="btn btn-primary form-control" @click="prueba"> Registrar El Gran Turno </button>
        </div>
      </fieldset>
      <div>
        <button class="btn btn-info" @click="$router.push('/Turnos')">Ver Turno</button>

        <a
          href=""
          class="btn btn btn btn-info"
          role="button"
          aria-pressed="true"
          style="float: right"
          >Eliminar Turno</a
        >
      </div>
    </form>
  </div>
</template>

<script>
import conectarTurnos from '../services/conectarTurnos'
import conectarMedicos from '../services/conectarMedicos'

export default{
  setup(){

  },
  data(){

    return{
          miTurno: { id_afiliado: 0, nombreA: '', apellidoA: '', dniA: 0, nombreM: '', apellidoM: '', especialidadM: '', fecha: '', hora: ''},
          miFecha: { dia: '', mes: '', anio:''},
          matriculaMed: {matri: ''},
    }
  },
  methods: {
      async encontrarMedico(matricula){
        debugger
        const misMeds = await conectarMedicos.getMedicos();
        debugger
        console.log(misMeds);
        debugger
      },
      prueba(){
        debugger
        this.encontrarMedico(this.matriculaMed.matri)
      }
  }
}
</script>

