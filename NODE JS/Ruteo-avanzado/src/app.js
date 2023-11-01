import express from 'express'
import UserRouter from './routes/users.router.js'


const userRouter = new UserRouter()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/dictionary',dictionaryRouter)
app.use('/api/users', userRouter.getRouter())

app.listen(8080)