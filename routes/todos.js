import express from 'express'
const router = express.Router()

/* GET users listing. */
const todos = [{id: 1, name: 'First todo', completed: false}]
router.get('/', function (req, res, next) {
	res.status(200).json(todos)
})
router.get('/:id', function (req, res, next) {
	const foundTodo = todos.find(todo => todo.id === Number(req.params.id))
	res.json(foundTodo)
})

export default router
