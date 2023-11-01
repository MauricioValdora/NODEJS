import express from 'express'
import mongoose from 'mongoose'
import { userModel } from './models/user.model.js'
import userInfo from './Users.json' assert {type: 'json'}
import { studentsModel } from './models copy/students.model.js'
import { courseModel } from './models copy/courses.model.js'

const enviroment = async () => {

    try {
        await mongoose.connect('mongodb+srv://mauricio:valdora@clustermaury.y8wiux9.mongodb.net/clase16')
        // const responseInsert = await userModel.insertMany(userInfo)
        // const serchById = await userModel.find({first_name:'Jose'}).explain('executionStats')
        // console.log(serchById)


        // //insert student
        // await studentsModel.create({
        //     first_name: 'lucas',
        //     last_name: 'vega',
        //     email: 'lucasvegaa@gmail.com',
        //     gender: 'M'
        // })

        // //insert course

        // await courseModel.create({
        //     title: 'Programacion backend',
        //     description: "Curso de programación Backend",
        //     teacher: 'alex'
        // })
        // await courseModel.create({
        //     title: 'Programacion FrontEnd',
        //     description: "Curso de programación frontEnd con react",
        //     teacher: 'Maximiliano'
        // })

        // const student = await studentsModel.findOne({ _id: '65136d6b5df4965647e52086' })

        // student.courses.push({ course: '65136d6b5df4965647e52089' }, { course: '65136d6b5df4965647e5208c' })

        // const updateResult = await studentsModel.updateOne({ _id: '65136d6b5df4965647e52086' }, student)

        // const student = await studentsModel.find().populate('courses.course')
        const student = await studentsModel.find()
        console.log(JSON.stringify(student, null, '\t'))

    } catch (error) {
        console.log(error)
    }

}
enviroment()