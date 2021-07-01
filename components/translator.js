const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  americanToBritishTranslator(text) {
    let translatedText = text.trim();

    for (const americanWord in americanOnly) {
      translatedText = translatedText.replace(americanWord, '<span class="highlight">'+americanOnly[americanWord]+'</span>');
    }

    for (const americanSpelling in americanToBritishSpelling) {
      translatedText = translatedText.replace(americanSpelling, '<span class="highlight">'+americanToBritishSpelling[americanSpelling]+'</span>');
    }

    for (const americanTitles in americanToBritishTitles) {
      translatedText = translatedText.replace(americanTitles, '<span class="highlight">'+americanToBritishTitles[americanTitles]+'</span>');
    }

    return translatedText
  }

  britishToAmericanTranslator(text) {
    let translatedText = text.trim();

    for (const britishWord in britishOnly) {
      translatedText = translatedText.replace(britishWord, '<span class="highlight">'+britishOnly[britishWord]+'</span>');
    }

    return translatedText
  }

}

module.exports = Translator;