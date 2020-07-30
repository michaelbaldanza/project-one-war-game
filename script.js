// card info

class Card {
    constructor(cardname, cssname, value) {
        this.cardname = cardname;
        this.cssname = cssname;
        this.value = value;
    };
    cardFace () {
        return this.cssname;
    };
    getValue () {
        return this.value;
    };
};

// app's state

let mDeck, p1Deck, p2Deck;

let p1Discard = [];

let p2Discard = [];

mDeck = [
    new Card('Ace of Diamonds', 'aceofdiamonds', 14),
    new Card('King of Diamonds', 'kingofdiamonds', 13),
    new Card('Queen of Diamonds', 'queenofdiamonds', 12),
    new Card('Jack of Diamonds', 'jackofdiamonds', 11),
    new Card('Ten of Diamonds', 'tenofdiamonds', 10),
    new Card('Nine of Diamonds', 'nineofdiamonds', 9),
    new Card('Eight of Diamonds', 'eightofdiamonds', 8),
    new Card('Seven of Diamonds', 'sevenofdiamonds', 7),
    new Card('Six of Diamonds', 'sixofdiamonds', 6),
    new Card('Five of Diamonds', 'fiveofdiamonds', 5),
    new Card('Four of Diamonds', 'fourofdiamonds', 4),
    new Card('Three of Diamonds', 'threeofdiamonds', 3),
    new Card('Two of Diamonds', 'twoofdiamonds', 2),
    new Card('Ace of Hearts', 'aceofhearts', 14),
    new Card('King of Hearts', 'kingofhearts', 13),
    new Card('Queen of Hearts', 'queenofhearts', 12),
    new Card('Jack of Hearts', 'jackofhearts', 11),
    new Card('Ten of Hearts', 'tenofhearts', 10),
    new Card('Nine of Hearts', 'nineofhearts', 9),
    new Card('Eight of Hearts', 'eightofhearts', 8),
    new Card('Seven of Hearts', 'sevenofhearts', 7),
    new Card('Six of Hearts', 'sixofhearts', 6),
    new Card('Five of Hearts', 'fiveofhearts', 5),
    new Card('Four of Hearts', 'fourofhearts', 4),
    new Card('Three of Hearts', 'threeofhearts', 3),
    new Card('Two of Hearts', 'twoofhearts', 2),
    new Card('Ace of Spades', 'aceofspades', 14),
    new Card('King of Spades', 'kingofspades', 13),
    new Card('Queen of Spades', 'queenofspades', 12),
    new Card('Jack of Spades', 'jackofspades', 11),
    new Card('Ten of Spades', 'tenofspades', 10),
    new Card('Nine of Spades', 'nineofspades', 9),
    new Card('Eight of Spades', 'eightofspades', 8),
    new Card('Seven of Spades', 'sevenofspades', 7),
    new Card('Six of Spades', 'sixofspades', 6),
    new Card('Five of Spades', 'fiveofspades', 5),
    new Card('Four of Spades', 'fourofspades', 4),
    new Card('Three of Spades', 'threeofspades', 3),
    new Card('Two of Spades', 'twoofspades', 2),
    new Card('Ace of Clubs', 'aceofclubs', 14),
    new Card('King of Clubs', 'kingofclubs', 13),
    new Card('Queen of Clubs', 'queenofclubs', 12),
    new Card('Jack of Clubs', 'jackofclubs', 11),
    new Card('Ten of Clubs', 'tenofclubs', 10),
    new Card('Nine of Clubs', 'nineofclubs', 9),
    new Card('Eight of Clubs', 'eightofclubs', 8),
    new Card('Seven of Clubs', 'sevenofclubs', 7),
    new Card('Six of Clubs', 'sixofclubs', 6),
    new Card('Five of Clubs', 'fiveofclubs', 5),
    new Card('Four of Clubs', 'fourofclubs', 4),
    new Card('Three of Clubs', 'threeofclubs', 3),
    new Card('Two of Clubs', 'twoofclubs', 2),
    new Card('Red Joker', 'jokerred', 15),
    new Card('Black Joker', 'jokerblack', 15),
];

function shuffle(inputDeck) {
    let outputDeck = [];
    while (inputDeck.length>0) {
        let randomIndex = Math.floor(Math.random() * inputDeck.length);
        let randomCard  = inputDeck[randomIndex];
        inputDeck.splice(randomIndex, 1);
        outputDeck.push(randomCard);
        // console.log(randomCard);
        // console.log(randomIndex);
    };



    // for (i=0; i<inputDeck.length; i++) {

    // }
    return outputDeck;
}

mDeck = shuffle(mDeck);
console.dir(mDeck);

p1Deck = mDeck.splice(27, 27);
p2Deck = mDeck.splice(0, 27);

console.log(p1Deck);
console.log(p2Deck);

// cached element references

const p1DeckEl = document.getElementById('player1deck');
const p1DiscardEl = document.getElementById('player1discard');
const p1DecisionEl = document.getElementById('player1decision');
const p1War1El = document.getElementById('player1war1');
const p1War2El = document.getElementById('player1war2');
const p1War3El = document.getElementById('player1war3');
const p1RevealEl = document.getElementById('player1reveal');

const p2DeckEl = document.getElementById('player2deck');
const p2DiscardEl = document.getElementById('player2discard');
const p2DecisionEl = document.getElementById('player2decision');
const p2War1El = document.getElementById('player2war2');
const p2War2El = document.getElementById('player2war2');
const p2War3El = document.getElementById('player2war3');
const p2RevealEl = document.getElementById('player2reveal');
 
// event listeners

p1DeckEl.addEventListener('click', shuffleReveal);

p1DiscardEl.addEventListener('click', play);

//functions

function removeClasses () {
    this.className = '';
};

function warReveal () {
    p1War1El.classList.add('card', p1Deck)
}

function warDecision () {
    let decisionCard1 = p1Deck[4].cardFace();
    let decisionCard2 = p2Deck[4].cardFace();
    if (decisionCard1.getValue() > decisionCard2.getValue()) {
            
    }
}

function shuffleReveal() {
    if (p1Deck.length === 0) {
        p1Deck = shuffle(p1Discard);
    };

    if (p2Deck.length === 0) {
        p2Deck = shuffle(p2Discard);
    };

    if (p1Deck.length === 54) {
        alert('Player 1 wins!');
    };

    if (p2Deck.length === 54) {
        alert ('Player 2 wins!');
    };

    p1RevealEl.classList.add('card', p1Deck[0].cardFace());
    p2RevealEl.classList.add('card', p2Deck[0].cardFace());
};

function play() {
    // p1DiscardEl.removeClasses();
    // p2DiscardEl.removeClasses();
    let transferCard1 = p1Deck.shift();
    let transferCard2 = p2Deck.shift();
    console.log(transferCard1);
    console.log(transferCard2);
    if (transferCard1.getValue() > transferCard2.getValue()) {
        p1Discard.unshift(transferCard1);
        p1Discard.unshift(transferCard2);
        p1DiscardEl.classList.remove('card', p1Discard[0].cardFace());
        // p1DiscardEl.removeClasses();
        p1DiscardEl.classList.add('card', transferCard2.cardFace());


//modify to allow for tie condition in war

   } else if (transferCard2.getValue > transferCard1.getValue()) {
    p2Discard.unshift(transferCard2);
    p2Discard.unshift(transferCard1);
    p2DiscardEl.classList.remove('card', p2Discard[0].cardFace());
    // p2DiscardEl.removeClasses();
    p2DiscardEl.classList.add('card', transferCard1.cardFace());
   } else {
        return warReveal;
        return warDecision;
   }

   p1RevealEl.classList.remove('card', transferCard1.cardFace());
   p2RevealEl.classList.remove('card', transferCard2.cardFace());

    console.log(p1Discard);
    console.log(p2Discard);
    console.log(p1Deck);
    console.log(p2Deck);
};

//// experimental

function play() {
    // p1DiscardEl.removeClasses();
    // p2DiscardEl.removeClasses();
//     let transferCard1 = p1Deck.shift();
//     let transferCard2 = p2Deck.shift();
//     console.log(transferCard1);
//     console.log(transferCard2);
    if (p1Deck[0].getValue() > p2Deck[0].getValue()) {
        let transferCard1 = p1Deck.shift();
        let transferCard2 = p2Deck.shift();
        p1Discard.unshift(transferCard1);
        p1Discard.unshift(transferCard2);
        p1DiscardEl.classList.remove('card', p1Discard[0].cardFace());
        p1DiscardEl.classList.add('card', transferCard2.cardFace());
        p1War2El.classList.remove('card', transferCard1.cardFace());
        p2War2El.classList.remove('card', transferCard2.cardFace());

   } else if (p1Deck[0].getValue() > p2Deck[0].getValue()) {
    let transferCard1 = p1Deck.shift();
    let transferCard2 = p2Deck.shift();
    p2Discard.unshift(transferCard2);
    p2Discard.unshift(transferCard1);
    p2DiscardEl.classList.remove('card', p2Discard[0].cardFace());
    p2DiscardEl.classList.add('card', transferCard1.cardFace());
    p1War2El.classList.remove('card', transferCard1.cardFace());
    p2War2El.classList.remove('card', transferCard2.cardFace());
    
   } else {
       return alert('WAR is declared! Click the card already on play in the field to reveal the stakes and the deciding card. Then click the revealed deciding card to seize the spoils… or suffer ignominious DEFEAT ');
       
   }



// function takeTurn() {
//     play();
//     if (p1Deck === 0) {
//         p1discard
//     }
// }

// function reshuffle() {
//     if (p1Deck == 0) {

//     }
// }

// masterDeck[30].cardname;
// console.log(masterDeck.filter(x => x.cardname === 'Ace of Diamonds').length);
// forEach(console.log(x.cardname));
//check randomizer by filtering deck - iterate ind values ot get names, 
//then filter values to check - length greater than one, randomizer mech is broken