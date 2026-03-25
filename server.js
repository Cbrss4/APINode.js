import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) =>{

   users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)
/*
  (node --watch {nome do arquivo}) = ira reniciar o servidor sempre que ocorrer uma mudança no codigo
  (Ctrl + C) = fechar o servidor

  gabrielsilvacabrerisso_db_user
  0Gs6iCxSdwxPIrPE

  Mongodb e prisma 
*/