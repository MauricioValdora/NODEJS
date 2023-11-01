import express from 'express'
import coursesRouter from './routes/courses.router.js'
import studentRouter from './routes/students.router.js'
import viewsRouter from './routes/view.router.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import __dirname from './utils.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)
app.use('/api/students', studentRouter)
app.use('/api/courses', coursesRouter)

try {
    await mongoose.connect('mongodb+srv://mauricio:valdora@clustermaury.y8wiux9.mongodb.net/ecomerce')
    console.log('base de datos conectada perfectamente');
} catch (error) {
    console.log(error.message)
}

app.listen(8080, () => {
    console.log('server running')
})