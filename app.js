const express = require('express')
const mongoose = require('mongoose')

require('./models/Metas')
const Meta = mongoose.model('Meta')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost/Metas', {
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

app.post('/metas', async (req, res) => {
  await Meta.create(req.body, (err) => {
    if (err) return res.status(400).json({
      error: true,
      message: "Erro: Meta não cadastrada com sucesso!",
    })
  })
  return res.json({
    error: false,
    metas: "Meta cadastrada com sucesso!"
  })
})

app.listen(8080, () => {
  console.log("Servidor iniciado na porta  8080: http://localhost:8080")
})

