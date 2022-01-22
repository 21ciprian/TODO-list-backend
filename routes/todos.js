import express from 'express'
const router = express.Router()

/* GET users listing. */
const todos = [{id: 1, name: 'First todo', completed: false}]
router.get('/', function (req, res, next) {
	res.status(200).json(todos)
})

export default router
