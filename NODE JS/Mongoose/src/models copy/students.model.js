import mongoose, { mongo } from 'mongoose'

const studentCollection = 'students';

const stundentSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type: String,
        enum:["M","F"]
    },
    courses:{
        type:[
            {
                course:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'courses',
                }
            }
        ],
        default:[]
    }

})

stundentSchema.pre('find',function(){
    this.populate('courses.course')
})

export const studentsModel = mongoose.model(studentCollection,stundentSchema)