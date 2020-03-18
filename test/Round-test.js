const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  beforeEach(function() {
    console.log('hi');
  });

  it('should be a function', function() {
    const card1 = new Card(14, 'What is Helen Keller\'s favorite color?', ['blue', 'red', 'velcro'], 'velcro');
    const card2 = new Card(1, 'Why did Timmy fall off the swing?', ['he had no arms', 'his hand slipped', 'he was not strapped in'], 'he had no arms');
    const card3 = new Card(12, 'Knock Knock. Who\'s there?', ['not Timmy', 'the mailman', 'the neighbor'], 'not Timmy');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(14, 'What is Helen Keller\'s favorite color?', ['blue', 'red', 'velcro'], 'velcro');
    const card2 = new Card(1, 'Why did Timmy fall off the swing?', ['he had no arms', 'his hand slipped', 'he was not strapped in'], 'he had no arms');
    const card3 = new Card(12, 'Knock Knock. Who\'s there?', ['not Timmy', 'the mailman', 'the neighbor'], 'not Timmy');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it('returnCurrentCard should return the current card being played', function() {
    const card1 = new Card(14, 'What is Helen Keller\'s favorite color?', ['blue', 'red', 'velcro'], 'velcro');
    const card2 = new Card(1, 'Why did Timmy fall off the swing?', ['he had no arms', 'his hand slipped', 'he was not strapped in'], 'he had no arms');
    const card3 = new Card(12, 'Knock Knock. Who\'s there?', ['not Timmy', 'the mailman', 'the neighbor'], 'not Timmy');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it('should start with zero turns and incorrectGuesses', function() {
    const card1 = new Card(14, 'What is Helen Keller\'s favorite color?', ['blue', 'red', 'velcro'], 'velcro');
    const card2 = new Card(1, 'Why did Timmy fall off the swing?', ['he had no arms', 'his hand slipped', 'he was not strapped in'], 'he had no arms');
    const card3 = new Card(12, 'Knock Knock. Who\'s there?', ['not Timmy', 'the mailman', 'the neighbor'], 'not Timmy');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it.skip('takeTurn should update turns count', function() {
    const card1 = new Card(14, 'What is Helen Keller\'s favorite color?', ['blue', 'red', 'velcro'], 'velcro');
    const card2 = new Card(1, 'Why did Timmy fall off the swing?', ['he had no arms', 'his hand slipped', 'he was not strapped in'], 'he had no arms');
    const card3 = new Card(12, 'Knock Knock. Who\'s there?', ['not Timmy', 'the mailman', 'the neighbor'], 'not Timmy');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn();
    expect(round.turns).to.equal(1);

    round.takeTurn();
    expect(round.turns).to.equal(2);
  });

  it.skip('', function() {
    const card1 = new Card(14, 'What is Helen Keller\'s favorite color?', ['blue', 'red', 'velcro'], 'velcro');
    const card2 = new Card(1, 'Why did Timmy fall off the swing?', ['he had no arms', 'his hand slipped', 'he was not strapped in'], 'he had no arms');
    const card3 = new Card(12, 'Knock Knock. Who\'s there?', ['not Timmy', 'the mailman', 'the neighbor'], 'not Timmy');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn();
  });

});
