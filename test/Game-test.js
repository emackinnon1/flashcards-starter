const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('should be function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start a game with correct number of instantiations', function() {
    const game = new Game();
    game.start(prototypeQuestions);
    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.currentDeck).to.be.an.instanceof(Deck);
    expect(game.currentRound.currentDeck.cards[0]).to.be.an.instanceof(Card);
    expect(game.currentRound.currentDeck.cards.length).to.equal(30);

  });

});
