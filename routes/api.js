'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      if (Object.keys(req.body).length < 2) { res.status(200).send({ error: 'Required field(s) missing' }) };

      if (!req.body.text) { res.status(200).send({ error: 'No text to translate' }) };

      switch (req.body.locale) {
        case 'american-to-british':
          res.status(200).json({
            text: req.body.text,
            translation: translator.americanToBritishTranslator(req.body.text) !== req.body.text ? translator.americanToBritishTranslator(req.body.text) : 'Everything looks good to me!'
          });
          break;
        case 'british-to-american':
          res.status(200).json({
            text: req.body.text,
            translation: translator.britishToAmericanTranslator(req.body.text) !== req.body.text ? translator.britishToAmericanTranslator(req.body.text) : 'Everything looks good to me!'
          });
          break;
        default:
          res.status(200).send({ error: 'Invalid value for locale field' });
          break;
      }
    });
};
