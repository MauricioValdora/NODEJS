import mongoose from 'mongoose'

const userCollection = 'usuarios' //asi se llama la coleccion en la base de datos

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: {
        type: String,
        unique: true
    },
    gender: String
})

export const userModel = mongoose.model(userCollection, userSchema)