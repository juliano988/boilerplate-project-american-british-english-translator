const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {

  suite('American English to British English', function () {

    test('Translate Mangoes are my favorite fruit. to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('Mangoes are my favorite fruit.'),
        'Mangoes are my <span class=\"highlight\">favourite</span> fruit.',
        'Translation result should be: Mangoes are my <span class=\"highlight\">favourite</span> fruit.')
      done();
    })

    test('Translate I ate yogurt for breakfast. to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('I ate yogurt for breakfast.'),
        'I ate <span class=\"highlight\">yoghurt</span> for breakfast.',
        'Translation result should be: I ate <span class=\"highlight\">yoghurt</span> for breakfast.')
      done();
    })

    test('Translate We had a party at my friend\'s condo.', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('We had a party at my friend\'s condo.'),
        'We had a party at my friend\'s <span class=\"highlight\">flat</span>.',
        'Translation result should be: We had a party at my friend\'s <span class=\"highlight\">flat</span>.')
      done();
    })

    test('Translate Can you toss this in the trashcan for me? to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('Can you toss this in the trashcan for me?'),
        'Can you toss this in the <span class=\"highlight\">rubbish</span>can for me?',
        'Translation result should be: Can you toss this in the <span class=\"highlight\">rubbish</span>can for me?')
      done();
    })

    test('Translate The parking lot was full. to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('The parking lot was full.'),
        'The <span class=\"highlight\">car park</span> was full.',
        'Translation result should be: The <span class=\"highlight\">car park</span> was full.')
      done();
    })

    test('Translate Like a high tech Rube Goldberg machine. to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('Like a high tech Rube Goldberg machine.'),
        'Like a high tech Rube Goldberg machine.',
        'Translation result should be: Like a high tech Rube Goldberg machine.')
      done();
    })

    test('Translate To play hooky means to skip class or work. to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('To play hooky means to skip class or work.'),
        'To <span class=\"highlight\">bunk off</span> means to skip class or work.',
        'Translation result should be: To <span class=\"highlight\">bunk off</span> means to skip class or work.')
      done();
    })

    test('Translate No Mr. Bond, I expect you to die. to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('No Mr. Bond, I expect you to die.'),
        'No <span class=\"highlight\">Mr</span> Bond, I expect you to die.',
        'Translation result should be: No <span class=\"highlight\">Mr</span> Bond, I expect you to die.')
      done();
    })

    test('Translate Dr. Grosh will see you now. to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('Dr. Grosh will see you now.'),
        '<span class=\"highlight\">Dr</span> Grosh will see you now.',
        'Translation result should be: <span class=\"highlight\">Dr</span> Grosh will see you now.')
      done();
    })

    test('Translate Lunch is at 12:15 today. to British English', function (done) {
      assert.equal(
        translator.americanToBritishTranslator('Lunch is at 12:15 today.'),
        'Lunch is at <span class=\"highlight\">12.15</span> today.',
        'Translation result should be: Lunch is at <span class=\"highlight\">12.15</span> today.')
      done();
    })

  })

  suite('British English to American English', function () {

    test('Translate We watched the footie match for a while. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('We watched the footie match for a while.'),
        'We watched the <span class=\"highlight\">soccer</span> match for a while.',
        'Translation result should be: We watched the <span class=\"highlight\">soccer</span> match for a while.')
      done();
    })

    test('Translate Paracetamol takes up to an hour to work. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('Paracetamol takes up to an hour to work.'),
        'Parace<span class=\"highlight\">thank you</span>mol takes up to an hour to work.',
        'Translation result should be: Parace<span class=\"highlight\">thank you</span>mol takes up to an hour to work.')
      done();
    })

    test('Translate First, caramelise the onions. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('First, caramelise the onions.'),
        'First, caramelise the onions.',
        'Translation result should be: First, caramelise the onions.')
      done();
    })

    test('Translate I spent the bank holiday at the funfair. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('I spent the bank holiday at the funfair.'),
        'I spent the <span class=\"highlight\"><span class=\"highlight\">bar</span>lic holiday</span> at the <span class=\"highlight\">carnival</span>.',
        'Translation result should be: I spent the <span class=\"highlight\"><span class=\"highlight\">bar</span>lic holiday</span> at the <span class=\"highlight\">carnival</span>.')
      done();
    })

    test('Translate I had a bicky then went to the chippy. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('I had a bicky then went to the chippy.'),
        'I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-<span class=\"highlight\">fish-and-chip shop</span></span>.',
        'Translation result should be: I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-<span class=\"highlight\">fish-and-chip shop</span></span>.')
      done();
    })

    test('Translate I\'ve just got bits and bobs in my bum bag. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('I\'ve just got bits and bobs in my bum bag.'),
        'I\'ve just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.',
        'Translation result should be: I\'ve just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.')
      done();
    })

    test('Translate The car boot sale at Boxted Airfield was called off. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('The car boot sale at Boxted Airfield was called off.'),
        'The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.',
        'Translation result should be: I\'ve just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.')
      done();
    })

    test('Translate Have you met Mrs Kalyani? to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('Have you met Mrs Kalyani?'),
        'Have you met Mrs Kalyani?',
        'Translation result should be: Have you met Mrs Kalyani?')
      done();
    })

    test('Translate Prof Joyner of King\'s College, London. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('Prof Joyner of King\'s College, London.'),
        'Prof Joyner of King\'s College, London.',
        'Translation result should be: Prof Joyner of King\'s College, London.')
      done();
    })

    test('Translate Tea time is usually around 4 or 4.30. to American English', function (done) {
      assert.equal(
        translator.britishToAmericanTranslator('Tea time is usually around 4 or 4.30.'),
        'Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.',
        'Translation result should be: Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.')
      done();
    })

  })

  suite('Highlight translations', function () {

    test('Highlight translation in Mangoes are my favorite fruit.', function (done) {
      assert.match(
        translator.americanToBritishTranslator('Mangoes are my favorite fruit.'),
        /<span class=\"highlight\">.+<\/span>/g,
        'Translation result should contain: <span class=\"highlight\">[word]</span>')
      done();
    })

    test('Highlight translation in I ate yogurt for breakfast.', function (done) {
      assert.match(
        translator.americanToBritishTranslator('I ate yogurt for breakfast.'),
        /<span class=\"highlight\">.+<\/span>/g,
        'Translation result should contain: <span class=\"highlight\">[word]</span>')
      done();
    })

    test('Highlight translation in We watched the footie match for a while.', function (done) {
      assert.match(
        translator.britishToAmericanTranslator('We watched the footie match for a while.'),
        /<span class=\"highlight\">.+<\/span>/g,
        'Translation result should contain: <span class=\"highlight\">[word]</span>')
      done();
    })

    test('Highlight translation in Paracetamol takes up to an hour to work.', function (done) {
      assert.match(
        translator.britishToAmericanTranslator('Paracetamol takes up to an hour to work.'),
        /<span class=\"highlight\">.+<\/span>/g,
        'Translation result should contain: <span class=\"highlight\">[word]</span>')
      done();
    })

  })

});
