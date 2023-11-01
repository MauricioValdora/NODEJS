import mongoose, { mongo } from 'mongoose'

const studentCollection = 'students';

const stundentSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    grade: Number,
    group: String
})

export const studentsModel = mongoose.model(studentCollection, stundentSchema)