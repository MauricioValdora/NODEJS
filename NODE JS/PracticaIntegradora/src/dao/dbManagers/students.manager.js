import {studentsModel} from '../models/students.model.js'

export default class Students{
    constructor(){
        console.log('Working students with DB')
    }

    getAll = async()=>{
        const students = await studentsModel.find()
        //POJO plain old javascript object
        return students.map(student =>student.toObject())//averiguar que significa esto 
    }

    save = async(student)=>{
        const result = await studentsModel.create(student);
        return result;
    }
}