import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.json({title: 'TODO list-backend'})
})

export default router
