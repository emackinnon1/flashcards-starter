const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', function() {

  let round;

  beforeEach('instantiate objects', () => {
    const card1 = new Card(14, 'What is Helen Keller\'s favorite color?', ['blue', 'red', 'velcro'], 'velcro');
    const card2 = new Card(1, 'Why did Timmy fall off the swing?', ['he had no arms', 'his hand slipped', 'he was not strapped in'], 'he had no arms');
    const card3 = new Card(12, 'Knock Knock. Who\'s there?', ['not Timmy', 'the mailman', 'the neighbor'], 'not Timmy');

    const deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('returnCurrentCard should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it('should start with zero turns and incorrectGuesses', function() {
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('takeTurn should update turns count', function() {
    round.takeTurn();
    expect(round.turns).to.equal(1);
    round.takeTurn();
    expect(round.turns).to.equal(2);
  });

  it('takeTurn should update currentCard and next card should be new currentCard', function() {
    expect(round.currentCard).to.deep.equal(round.currentDeck.cards[0]);
    round.takeTurn();
    expect(round.currentCard).to.deep.equal(round.currentDeck.cards[1]);
    round.takeTurn();
    expect(round.currentCard).to.deep.equal(round.currentDeck.cards[2]);
  });

  it('should evaluate guess', function() {
    expect(round.takeTurn('blue')).to.equal('Incorrect!');
  });

  it('should record wrong guesses in incorrectGuesses array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('blue');
    expect(round.incorrectGuesses).to.deep.equal([14]);

    round.takeTurn('he had no arms');
    expect(round.incorrectGuesses).to.deep.equal([14]);

    round.takeTurn('the mailman');
    expect(round.incorrectGuesses).to.deep.equal([14, 12]);
  });

  it('calculatePercentCorrect should calculate and return the percentage of correct guesses', function () {
    round.takeTurn('blue');
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

});
