import { Router } from 'express'
import { userModel } from '../models/user.model.js'

const router = Router();

router.get('/', async (req, res) => {
    
    try {
        let users = await userModel.find()
        res.send({ result: "succes", payload: users })
    } catch (error) {
        console.log(error)
    }

})

router.post('/', async (req, res) => {

    const { first_name, last_name, email } = req.body

    if (!first_name || !last_name || !email) {
        return res.status(401).json("please enter all the fields")
    }

    const result = await userModel.create({
        first_name,
        last_name,
        email
    })

    res.send({ status: 'succes', payload: result })

})

export default router