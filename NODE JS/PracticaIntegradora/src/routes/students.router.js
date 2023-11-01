import { Router } from 'express'
import Students from '../dao/dbManagers/students.manager.js'

const router = Router();
const studentManager = new Students();

router.get('/', async (req, res) => {

    try {
        const students = await studentManager.getAll()
        res.send({ status: 'success', payload: students })
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message })
    }

})
router.post('/', async (req, res) => {

    const { first_name, last_name, email, dni, birth_date, gender } = req.body
    if (!first_name || !last_name || !email || !dni || !birth_date || !gender) {
        return res.status(422).send({ status: 'error', error: 'incomplete' })
    }

    try {
        const result = await studentManager.save({
            first_name,
            last_name,
            email,
            dni,
            birth_date,
            gender
        })
        res.status(201).send({ status: 'succes', payload: result })

    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message })

    }
})


export default router