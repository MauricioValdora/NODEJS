import express from 'express'
import { fork } from 'child_process'

const app = express()

app.get('/suma-no-bloc', (req, res) => {
    const child = fork('./operacionCompleja.js')
    child.send('inicia calculo porfavor')
    child.on('message', result => {
        res.send(`resultado ${result}`)
    })
})
app.get('/suma', (req, res) => {
    const result = operacionCompleja()
    res.send(`resultado ${result}`)
})
app.get('/test', (req, res) => {
    res.send(`hola :P`)
})



app.listen(8080)