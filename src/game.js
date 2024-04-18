const data = require('./data');
const { createDeck, countCards } = require('./deck');
const { round } = require('./round')
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function start() {
  const deck = createDeck(prototypeQuestions);
  const newRound = round(deck);
  printMessage(deck);
  printQuestion(newRound)
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(newRound) {
  util.main(newRound);
}

module.exports = { start, printMessage, printQuestion };
