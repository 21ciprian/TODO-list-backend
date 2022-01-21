import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.json({succes: true, payload: 'response from the first test'})
})

export default router
