/* eslint-disable */
const mongoose = require('mongoose');
const chai = require('chai');
const { NewUser, UserLogin, UserNewChapter } = require('../service/auth.с');
const expect = require('chai').expect;
const authMock = require('./mocks/auth/authMock.json');

describe('Integration Tests', function () {
  before(function (done) {
    mongoose.connect('mongodb://localhost/testDatabase', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      poolSize: 10,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function () {
      console.log('We are connected to test database!');
      done();
    });
  });
  describe('Сore logic tests', function () {
    it('New User Registration', async function () {
      let p = await NewUser(authMock.Auth_req);
      expect(p).to.be.an('object');
    });
    it('User registration with the same email', async function () {
      let p = await NewUser(authMock.Auth_req);
      expect(p).to.be.an('error');
    });
    it('User authorizations', async function () {
      let p = await UserLogin(authMock.Auth_req, authMock.args);
      expect(p).to.be.an('object');
    });
    it('User new chapter', async function () {
      let p = await UserNewChapter(authMock.new_Chapter_Req, authMock.args);
      expect(p).to.be.a('object');
    });
    // it('Chapter get Inventory', async function() {

    // })
    // it('Chapter generated inventory item', async function() {

    // })
    // it('Checking inventory after receiving a new item', async function() {

    // })
    // it('New spawn car', async function() {})
    // it('Set color spawn car', async function() {})
    // it('New spawn car', async function() {})
  });
  after(function (done) {
    mongoose.connection.db.dropDatabase(function () {
      mongoose.connection.close(done);
    });
  });
});
