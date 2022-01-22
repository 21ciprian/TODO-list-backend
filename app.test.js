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
})
