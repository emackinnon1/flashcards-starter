const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  beforeEach('instantiate objects', () => {
    const card1 = new Card(14, 'What is Helen Keller\'s favorite color?', ['blue', 'red', 'velcro'], 'velcro');
    const card2 = new Card(1, 'Why did Timmy fall off the swing?', ['he had no arms', 'his hand slipped', 'he was not strapped in'], 'he had no arms');
    const card3 = new Card(12, 'Knock Knock. Who\'s there?', ['not Timmy', 'the mailman', 'the neighbor'], 'not Timmy');

    deck = new Deck([card1, card2, card3]);
  });


  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('countCards should return the number of cards in the deck instance', function() {
    expect(deck.countCards()).to.equal(deck.cards.length);
  });

});
