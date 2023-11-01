import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    let testUser = {
        name: 'mauri',
        lastName: 'valdo',
        capital: '123123',
        direccion: 'dardo rocha 760'
    }
    res.render('index', {
        testUser,
        style:'index.css'
    })
});

export default router