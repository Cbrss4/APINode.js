import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) =>{

    console.log(req)

    res.send('Ok,post')
})

app.get('/users', (req, res) => {
    res.send('Funcionando?')
})

app.listen(3000)
/*
  (node --watch {nome do arquivo}) = ira reniciar o servidor sempre que ocorrer uma mudança no codigo
  (Ctrl + C) = fechar o servidor
 */