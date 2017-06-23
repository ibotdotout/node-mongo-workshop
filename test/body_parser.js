const request = require('supertest')
const app = require('../app')
const assert = require('chai').assert

describe('GET /body', function() {
  it('should post ok', async function() {
    const body = {
      name: 'test it'
    }

    const result = await request(app)
      .post('/body')
      .set('Accept', 'application/json')
      .send(body)
      .expect(200);

    assert.equal(result.body.name, 'test it')
  })
})
