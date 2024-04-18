const { evaluateGuess } = require("./card");
const { countCards } = require("./deck");

const round = (deck) => {
    return {
        deck: deck,
        turns: 0,
        currentCard: deck[0],
        incorrectGuesses: []
    }
}

const takeTurn = (guess, round) => {
    const result = evaluateGuess(guess, round.currentCard.correctAnswer);
    if (result === "incorrect!") {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.turns += 1;
    round.currentCard = round.deck[round.turns];
    return result;
}

const calculatePercentCorrect = (round) => {
    const correctAnswers = countCards(round.deck) - round.incorrectGuesses.length
    const percentage = ((correctAnswers / countCards(round.deck) * 100).toFixed(2));
    return percentage;
}

const endRound = (round) => {
    console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`)
    return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
}

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    endRound
}