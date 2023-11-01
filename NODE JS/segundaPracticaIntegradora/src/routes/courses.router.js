import { Router } from 'express'
import Courses from '../dao/dbManagers/courses.manager.js'

const router = Router();
const coursesManager = new Courses();

router.get('/', async (req, res) => {

    try {
        const courses = await coursesManager.getAll()
        res.send({ status: 'succes', payload: courses })
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message })
    }

})
router.post('/', async (req, res) => {

    const { title, description, teacher } = req.body
    if (!title || !description || !teacher) {
        return res.status(422).send({ status: 'error', error: 'incomplete' })
    }

    try {
        const result = await coursesManager.save({
            title,
            description,
            teacher
        })
        res.status(201).send({ status: 'succes', payload: result })

    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message })

    }
})
router.put('/:id', async (req, res) => {
    const { title, description, teacher } = req.body
    const { id } = req.params
    if (!title || !description || !teacher) {
        return res.status(422).send({ status: 'error', error: 'incomplete' })
    }
    try {
        const result = await coursesManager.update(id, {
            title, description,
            teacher
        });
        res.status(201).send({ status: 'succes', payload: result })
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message })

    }
})

export default router