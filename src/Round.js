const Turn = require('../src/Turn');

class Round {
  constructor(currentDeck) {
    this.turns = 0;
    this.currentDeck = currentDeck;
    this.currentCard = this.currentDeck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.currentDeck.cards[this.turns];
    return this.currentCard;
  }

  takeTurn(turnGuess) {
    const turn = new Turn(turnGuess, this.currentCard);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.turns++;
    this.returnCurrentCard();

    if (this.turns === this.currentDeck.cards.length) {
      return this.endRound();
    } else {
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return Math.floor((this.currentDeck.cards.length - this.incorrectGuesses.length) / this.currentDeck.cards.length * 100);
  }

  endRound() {
    const percentage = this.calculatePercentCorrect();
    const message = `Round Over! You answered ${percentage}% of the questions correctly!`;
    return message;
  }

}

module.exports = Round;
