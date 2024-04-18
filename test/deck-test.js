const chai = require("chai");
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require("../src/deck");

let card1, card2, card3, deck, count;

describe("createDeck", function () {
    beforeEach(function() {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = createDeck([card1, card2, card3]);
        count = countCards(deck)
    })
    it("should create an array of card objects", function () {
        expect(deck[0].id).to.equal(1)
    })
});
describe("countCards", function () {
    it("should return how many cards are in the deck", function () {
        expect(count).to.equal(3);
    })
})

