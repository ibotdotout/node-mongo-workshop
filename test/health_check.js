const request = require('supertest')
const app = require('../app')
const assert = require('chai').assert

describe('GET /health', function() {
  it('should get ok', async function() {

    const result = await request(app)
      .get('/health')
      .set('Accept', 'application/json')
      .expect(200);

    const body = result.body
    assert.equal(body.ok, true)
  })
})
