const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  test('Translation with text and locale fields: POST request to /api/translate', function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.', locale: 'american-to-british' })
      .end(function (err, res) {
        assert.isObject(res.body, 'Response should be an object');
        assert.equal(Object.keys(res.body).length, 2, 'Response object should has 2 properties');
        assert.propertyVal(res.body,'text','Mangoes are my favorite fruit.','Responde object property text should be: Mangoes are my favorite fruit.');
        assert.propertyVal(res.body,'translation','Mangoes are my <span class="highlight">favourite</span> fruit.','Responde object property text should be: Mangoes are my <span class="highlight">favourite</span> fruit.');
        done();
      })
  })

  test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.', locale: 'american-to-portuguese' })
      .end(function (err, res) {
        //{ error: 'Invalid value for locale field' }
        assert.isObject(res.body, 'Response should be an object');
        assert.equal(Object.keys(res.body).length, 1, 'Response object should has 1 properties');
        assert.propertyVal(res.body,'error','Invalid value for locale field','Responde object property error should be: Invalid value for locale field');
        done();
      })
  })

  test('Translation with missing text field: POST request to /api/translate', function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ locale: 'american-to-british' })
      .end(function (err, res) {
        assert.isObject(res.body, 'Response should be an object');
        assert.equal(Object.keys(res.body).length, 1, 'Response object should has 1 properties');
        assert.propertyVal(res.body,'error','Required field(s) missing','Responde object property error should be: Required field(s) missing');
        done();
      })
  })

  test('Translation with missing locale field: POST request to /api/translate', function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.'})
      .end(function (err, res) {
        assert.isObject(res.body, 'Response should be an object');
        assert.equal(Object.keys(res.body).length, 1, 'Response object should has 1 properties');
        assert.propertyVal(res.body,'error','Required field(s) missing','Responde object property error should be: Required field(s) missing');
        done();
      })
  })

  test('Translation with empty text: POST request to /api/translate', function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ text: '', locale: 'american-to-portuguese' })
      .end(function (err, res) {
        assert.isObject(res.body, 'Response should be an object');
        assert.equal(Object.keys(res.body).length, 1, 'Response object should has 1 properties');
        assert.propertyVal(res.body,'error','No text to translate','Responde object property error should be: No text to translate');
        done();
      })
  })

  test('Translation with text that needs no translation: POST request to /api/translate', function (done) {
    chai.request(server)
      .post('/api/translate')
      .send({ text: 'dog', locale: 'american-to-british' })
      .end(function (err, res) {
        assert.isObject(res.body, 'Response should be an object');
        assert.equal(Object.keys(res.body).length, 2, 'Response object should has 2 properties');
        assert.propertyVal(res.body,'text','dog','Responde object property text should be: dog');
        assert.propertyVal(res.body,'translation','Everything looks good to me!','Responde object property text should be: Everything looks good to me!');
        done();
      })
  })

});
