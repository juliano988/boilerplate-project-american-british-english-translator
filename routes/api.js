'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      switch (req.body.locale) {
        case 'american-to-british':
          res.status(200).json({ text: req.body.text, translation: translator.americanToBritishTranslator(req.body.text) });
          break;
        case 'british-to-american':
          res.status(200).json({ text: req.body.text, translation: translator.britishToAmericanTranslator(req.body.text) });
          break;
        default:
          break;
      }
    });
};
