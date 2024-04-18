const chai = require("chai");
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require("../src/deck");
const { round, takeTurn, calculatePercentCorrect, endRound } = require("../src/round.js");

let card1, card2, card3, deck, myRound;

describe("round", function () {
    beforeEach(function () {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = createDeck([card1, card2, card3]);
        myRound = round(deck)
    })
    it("should return object with deck property that holds deck object", function () {
        expect(myRound.deck).to.equal(deck)
    })
    it("should have current card as first card in deck", function () {
        expect(myRound.currentCard).to.equal(deck[0])
    })
    it("should start at turns 0", function () {
        expect(myRound.turns).to.equal(0)
    })
    it("should have incorrectGuesses as empty array", function () {
        expect(myRound.incorrectGuesses.length).to.equal(0);
    })
});
describe("takeTurn", function () {
    it("should update rounds turns by 1", function () {
        takeTurn("sea otter", myRound);
        expect(myRound.turns).to.equal(1)
    })
    it("the next card should become current card", function () {
        takeTurn("gallbladder", myRound);
        expect(myRound.currentCard).to.equal(myRound.deck[2])
    })
    it("should update incorrect guesses array", function () {
        takeTurn("Lex", myRound);
        expect(myRound.incorrectGuesses[0]).to.equal(12)
    })
});
describe("calculatePercentCorrect", function () {
    it("should return a percentage of correct answers", function () {
        const percentCorrect = calculatePercentCorrect(myRound);
        expect(percentCorrect).to.equal("66.67")
    })
})
describe("endRound", function () {
    it("should return a message with percentage", function () {
        const message = endRound(myRound)
        expect(message).to.equal("** Round over! ** You answered 66.67% of the questions correctly!")
    })
})