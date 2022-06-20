import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(bodyparser.json())
app.use(cors())
const port = 3001
//simular una base de datos en memoria

const listaAfiliados = [
  { id_afiliado: 0, nombreA: 'Pepe', apellidoA: 'Mujica', dniA: 30111111 },
  { id_afiliado: 1, nombreA: 'Obrador', apellidoA: 'Lopez', dniA: 30111112 },
  { id_afiliado: 2, nombreA: 'Raimundo', apellidoA: 'Lorea', dniA: 30111113 },
];
const listaTurnos = [
  { id_afiliado: 0, nombreA: 'Pepe1', apellidoA: 'Mujica', dniA: 30111111, nombreM: 'El médico01', apellidoM: 'apeMedico01', especialidadM: 'Clínico', fecha: '2022-05-01', hora: '16:30' },
  { id_afiliado: 0, nombreA: 'Pepe2', apellidoA: 'Mujica', dniA: 22111111, nombreM: 'El médico02', apellidoM: 'apeMedico02', especialidadM: 'Kineciologo' },
  { id_afiliado: 0, nombreA: 'Pepe3', apellidoA: 'Mujica', dniA: 25111111, nombreM: 'El médico03', apellidoM: 'apeMedico03', especialidadM: 'Pediatra' },
];
const listaMedicos = [
  { id_matricula: 0, nombreM: 'Marcela', apellidoM: 'Medina', especialidad: 'Pediatra' },
  { id_matricula: 1, nombreM: 'Dario', apellidoM: 'Perez', especialidad: 'Dermatologia' },
  { id_matricula: 2, nombreM: 'Fabiana', apellidoM: 'Salas', especialidad: 'Clinico' },
];
app.get('/api/getlistaMedicos', (req, res) => {
  res.json(listaMedicos);
})
app.post('/api/addAfiliados', (req, res) => {
  console.log(req.body);
  req.body.id_afiliado=Number(req.body.id_afiliado)
  listaAfiliados.push(req.body)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/getlistaAfiliados', (req, res) => {
  res.json(listaAfiliados);
})

app.get('/api/getlistaTurnos', (req, res) => {
  res.json(listaTurnos);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/api/addAfiliados', (req, res) => {
  console.log(req.body);
  listaAfiliados.push(req.body);
  res.json(req.body);
})

app.delete('/api/borrarAfiliados/:id_afiliado', (req, res) => {
  req.params.id_afiliado = parseInt(req.params.id_afiliado)
  console.log(req.params.id_afiliado);
  const listaA = listaAfiliados.map(e => { return e.id_afiliado })
  console.log(listaA);
  const indice = listaA.indexOf(req.params.id_afiliado);
  console.log(indice);
  listaAfiliados.splice(indice, 1);
  res.json(req.params)
})
app.post('/api/addTurnos', (req, res) => {
  console.log(req.body);
  listaTurnos.push(req.body);
  res.json(req.body);
})