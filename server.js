import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const app = express()
app.use(express.json())

app.post('/users', async (req, res) =>{

     await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age:req.body.age
      }
    })

    res.status(201).json(req.body)
})
app.put('/users/:id', async (req, res) =>{
  console.log(req)

     await prisma.user.update({
      where:{
        id: req.params.id
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age:req.body.age
      }
    })

    res.status(201).json(req.body)
})

app.get('/users',async (req, res) => {

    const users = await prisma.user.findMany() 
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

