const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexão com o banco de dados relizada com sucesso!")
}).catch((err) => {
   console.log("Erro: Conexão não realizada com sucesso", `${err}`)
})

app.get('/metas', async (req, res) => {
  return res.json({ message: 'Ola mundo node' })
})

app.post('/metas', async (rec, res) => {
  console.log(req.body)
})

app.listen(8080, () => {
  console.log("Servidor iniciado na porta  8080: http://localhost:8080")
})

