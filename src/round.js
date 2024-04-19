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
    const totalAnswers = countCards(round.deck)
    const totalIncorrect = round.incorrectGuesses.length;
    const totalCorrect = totalAnswers - totalIncorrect;
    const percentage = Number(((totalCorrect / totalAnswers) * 100).toFixed(2))
    return percentage;
}

const checkScore = (round) => {
    if (calculatePercentCorrect(round) < 90) {
        console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly! You need to try again.`)
        const { start } = require('./game'); // declared here, otherwise node circular dependency
        start();
        return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly! You need to try again.`
    } else {
        console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`)
        return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
    }
}

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    checkScore
}