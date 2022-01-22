import express from 'express'
const router = express.Router()

/* GET users listing. */
const todos = [{id: 1, name: 'First todo', completed: false}]
router.get('/', function (req, res, next) {
	res.status(200).json(todos)
})
router.get('/:id', function (req, res, next) {
	const foundTodo = todos.find(todo => todo.id === Number(req.params.id))
	if (!foundTodo) {
		return next(res.status(404))
	}
	res.json(foundTodo)
})
router.post('/', function (req, res, next) {
	const {body} = req
	const newTodo = {
		id: todos.length + 1,
		name: body.name,
		completed: false,
	}
	todos.push(newTodo)
	res.json(newTodo)
})

export default router
