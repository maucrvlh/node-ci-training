const request = require('supertest');
const app = require('../index.js'); 

describe('GET /', function () {
    it('deve responder com hello world', function (done) {
        request(app).get('/').expect('hello world', done);
    });
});