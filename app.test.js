import {describe, expect, jest, test} from '@jest/globals'
import request from 'supertest'
import app from './app'
jest.useRealTimers()
//first test
describe('Todos API', () => {
	test('GET/todos should return status(200)', async () => {
		const response = await request(app).get('/todos')
		expect(response.status).toBe(200)
	})
	test('GET/todos should check if content-type is application/json', async () => {
		const response = await request(app).get('/todos')
		expect(response.headers['content-type']).toMatch(/json/)
	})
	test('GET/todos should get the todo array', async () => {
		const response = await request(app).get('/todos')
		expect(response.body).toStrictEqual(
			expect.arrayContaining([
				expect.objectContaining({
					id: expect.any(Number),
					name: expect.any(String),
					completed: expect.any(Boolean),
				}),
			])
		)
	})

	test('GET/todos/:id should get the todo with the specific id', async () => {
		const response = await request(app).get('/todos/1')
		expect(response.body).toStrictEqual(
			expect.objectContaining({
				id: expect.any(Number),
				name: expect.any(String),
				completed: expect.any(Boolean),
			})
		)
	})
	test('GET/todos/:id should 404 if not found', async () => {
		const response = await request(app).get('/todos/9999')
		expect(response.status).toBe(404)
	})
})
