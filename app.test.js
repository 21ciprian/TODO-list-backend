import request from 'supertest'
import app from './app'

//first test
describe('Todos API', () => {
	it('GET/todos should return the todos array', async () => {
		const response = await request(app)
			.get('/todos')
			.expect('Content-Type', /json/)
			.expect(200)
	})
})
