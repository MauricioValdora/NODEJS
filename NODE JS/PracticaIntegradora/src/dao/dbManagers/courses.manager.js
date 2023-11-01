import { courseModel } from '../models/courses.model.js'

export default class Courses {
    constructor() {
        console.log('Working courses with DB')
    }
    //Clean code,nombres descriptivos 
    //SOLID
    //S = Single responsability
    //O = Open/Close
    //L = Liskov Substitution
    //I = interface segregation
    //D = dependency inversion
    
    getAll = async () => {
        const courses = await courseModel.find().lean()
        //POJO plain old javascript object
        return courses;
    }

    save = async (course) => {
        const result = await courseModel.create(course);
        return result;
    }

    update = async (id, course) => {
        const result = await courseModel.updateOne({ _id: id }, course)
        return result;
    }
}