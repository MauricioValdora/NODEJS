import mongoose from 'mongoose'

const usersCollection = 'users';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,

    },
    role: {
        type: String,
        required: true,
        default: 'user'
    }
})

export const userModel = mongoose.model(usersCollection, userSchema)