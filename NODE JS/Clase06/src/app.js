import express from 'express'

const app = express()

app.get('/bienvenida',(req, res)=>{
    res.send("Bienvendiooo")
})
app.get('/saludo',(req, res)=>{
    res.send({
        nombre:'mauri',
        edad:25,
        
    })
})

app.listen(8080,()=>{
    console.log("server on")
})