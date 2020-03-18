const Turn = require('../src/Turn');

class Round {
  constructor(currentDeck) {
    this.currentDeck = currentDeck;
    this.currentCard = this.currentDeck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(turnGuess) {
    this.turns += 1;
    const turn = new Turn(turnGuess, this.currentCard);
    console.log(turn);
  }
}

module.exports = Round;
