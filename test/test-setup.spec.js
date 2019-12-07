const { beforeEach, afterEach } = require('mocha')
const sinon = require('sinon')

beforeEach(function () {
  this.sandbox = sinon.createSandbox()
})

afterEach(function () {
  this.sandbox.restore()
})
