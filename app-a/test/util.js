const request = require('supertest-as-promised');
const app = require('../server.js');

module.exports.request = () => request.agent(app.listen());
module.exports.expect = require('chai').expect;
