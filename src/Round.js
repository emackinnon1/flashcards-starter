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
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor(this.incorrectGuesses.length / this.currentDeck.cards.length * 100);
  }

}

module.exports = Round;
