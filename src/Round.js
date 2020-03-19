const Turn = require('../src/Turn');

class Round {
  constructor(currentDeck) {
    this.currentDeck = currentDeck;
    this.turns = 0;
    this.currentCard = currentDeck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(turnGuess) {
    const turn = new Turn(turnGuess, this.currentCard);
    if (this.turns <= 2) {
      this.currentCard = this.currentDeck.cards[this.turns];
    } else {
      this.currentCard = this.currentDeck.cards[this.turns % this.currentDeck.cards.length];
    }

    this.turns += 1;
    return turn.giveFeedback();
  }
}

module.exports = Round;
