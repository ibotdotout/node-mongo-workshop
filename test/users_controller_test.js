const request = require('supertest')
const assert = require('chai').assert
const mongoose = require('mongoose')

const app = require('../app')
const User = require('../app/models/User')

describe('Post /users', function() {
  it('should create new users', async function() {
    const newUser = { name: 'noob' }

    const result = await request(app)
      .post('/users')
      .send(newUser)
      .set('Accept', 'application/json')
      .expect(201);

    const body = result.body
    assert.equal(body.name, 'noob')
  })
})

describe('List /users', function() {
  it('should list users', async function() {
    const dataUsers = [
      {name: 'one'},
      {name: 'two'}
    ]

    const users = await Promise.all(dataUsers.map(x => new User(x).save()))

    const result = await request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200);

    const body = result.body
    assert.equal(body.length, 2)
    assert.equal(body[0].name, 'one')
    assert.equal(body[1].name, 'two')
  })
})
