// card info

class Card {
    constructor(cssname, cardname, value) {
        this.cardname = cardname;
        this.cssname = cssname;
        this.value = value;
    };
};

// app's state

let mDeck, p1Deck, p1Discard, p2Deck, p2Discard;


mDeck = [
    new Card('Ace of Diamonds', 'card diamonds A', 14),
    new Card('King of Diamonds', 'card diamonds K', 13),
    new Card('Queen of Diamonds', 'card diamonds Q', 12),
    new Card('Jack of Diamonds', 'card diamonds J', 11),
    new Card('Ten of Diamonds', 'card diamonds r10', 10),
    new Card('Nine of Diamonds', 'card diamonds r09', 9),
    new Card('Eight of Diamonds', 'card diamonds r08', 8),
    new Card('Seven of Diamonds', 'card diamonds r07', 7),
    new Card('Six of Diamonds', 'card diamonds r06', 6),
    new Card('Five of Diamonds', 'card diamonds r05', 5),
    new Card('Four of Diamonds', 'card diamonds r04', 4),
    new Card('Three of Diamonds', 'card diamonds r03', 3),
    new Card('Two of Diamonds', 'card diamonds r02', 2),
    new Card('Ace of Hearts', 'card hearts A', 14),
    new Card('King of Hearts', 'card hearts K', 13),
    new Card('Queen of Hearts', 'card hearts Q', 12),
    new Card('Jack of Hearts', 'card hearts J', 11),
    new Card('Ten of Hearts', 'card hearts r10', 10),
    new Card('Nine of Hearts', 'card hearts r09', 9),
    new Card('Eight of Hearts', 'card hearts r08', 8),
    new Card('Seven of Hearts', 'card hearts r07', 7),
    new Card('Six of Hearts', 'card hearts r06', 6),
    new Card('Five of Hearts', 'card hearts r05', 5),
    new Card('Four of Hearts', 'card hearts r04', 4),
    new Card('Three of Hearts', 'card hearts r03', 3),
    new Card('Two of Hearts', 'card hearts r02', 2),
    new Card('Ace of Spades', 'card spades A', 14),
    new Card('King of Spades', 'card spades K', 13),
    new Card('Queen of Spades', 'card spades Q', 12),
    new Card('Jack of Spades', 'card spades J', 11),
    new Card('Ten of Spades', 'card spades r10', 10),
    new Card('Nine of Spades', 'card spades r09', 9),
    new Card('Eight of Spades', 'card spades r08', 8),
    new Card('Seven of Spades', 'card spades r07', 7),
    new Card('Six of Spades', 'card spades r06', 6),
    new Card('Five of Spades', 'card spades r05', 5),
    new Card('Four of Spades', 'card spades r04', 4),
    new Card('Three of Spades', 'card spades r03', 3),
    new Card('Two of Spades', 'card spades r02', 2),
    new Card('Ace of Clubs', 'card clubs A', 14),
    new Card('King of Clubs', 'card clubs K', 13),
    new Card('Queen of Clubs', 'card clubs Q', 12),
    new Card('Jack of Clubs', 'card clubs J', 11),
    new Card('Ten of Clubs', 'card clubs r10', 10),
    new Card('Nine of Clubs', 'card clubs r09', 9),
    new Card('Eight of Clubs', 'card clubs r08', 8),
    new Card('Seven of Clubs', 'card clubs r07', 7),
    new Card('Six of Clubs', 'card clubs r06', 6),
    new Card('Five of Clubs', 'card clubs r05', 5),
    new Card('Four of Clubs', 'card clubs r04', 4),
    new Card('Three of Clubs', 'card clubs r03', 3),
    new Card('Two of Clubs', 'card clubs r02', 2),
    new Card('Red Joker', 'card joker-red', 15),
    new Card('Black Joker', 'card joker-black', 15),
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

// p2War2El.classList.add('card', 'sixofclubs');

// p2War2El.classList.add('card', 'spades', 'r05');

p2War2El.classList.add('card', p2Deck[0](this.cssname));
 
// event listeners



function reveal() {

}

function play() {
    if (p1Deck[0].value > p2Deck[0].value) {
        let transferCard = p1Deck.shift();
        let transferCard2 = p2Deck.shift();
        p1Discard.push(transferCard);
        p1Discard.push(transferCard2);

//modify to allow for tie condition in war

   } else {
    let transferCard = p1Deck.shift();
    let transferCard2 = p2Deck.shift();
    p2Discard.push(transferCard);
    p2Discard.push(transferCard2);
   }

};

function takeTurn() {
    play();
    if (p1Deck === 0) {
        p1discard
    }
}

function reshuffle() {
    if (p1Deck == 0) {

    }
}

// masterDeck[30].cardname;
// console.log(masterDeck.filter(x => x.cardname === 'Ace of Diamonds').length);
// forEach(console.log(x.cardname));
//check randomizer by filtering deck - iterate ind values ot get names, 
//then filter values to check - length greater than one, randomizer mech is broken

// class Deck {
//     constructor(contents) {
//         this.contents = [];
//     };
//     playTopCard() {
//         return contents[0];
//     };
//     addCard(card) {
//         this.contents.push(Card);
//     };
//     splitRandomly() {

//     };
//     shuffleDeck() {

//     };

// };




// fucntion ()

// Decks

// const mDeck = [n01, n02, n03, n04, n05, n06, n07, n08, n09, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19, n20, n21, n22, n23, n24, n25, n26, n27, n28, n29, n30, n31, n32, n33, n34, n35, n36, n37, n38, n39, n40, n41, n42, n43, n44, n45, n46, n47, n48, n49, n50, n51, n52, n53, n54];

// mDeck.filter((element, index, mDeck)
//     for (i=0; i<mDeck.length; i++) {
        
//     }

// );

 




// let p1Discard = [];

// let p2Discard = [];



// const mDeck = new Deck();

// let p1Deck = new Deck();

// let p2Deck = new Deck();

// let p1Discard = new Deck();

// let p2Discard = new Deck();




// mDeck.addCard(n01);
// mDeck.addCard(n02);
// mDeck.addCard(n03);
// mDeck.addCard(n04);
// mDeck.addCard(n05);
// mDeck.addCard(n06);
// mDeck.addCard(n07);
// mDeck.addCard(n08);
// mDeck.addCard(n09);
// mDeck.addCard(n10);
// mDeck.addCard(n11);
// mDeck.addCard(n12);
// mDeck.addCard(n13);
// mDeck.addCard(n14);
// mDeck.addCard(n15);
// mDeck.addCard(n16);
// mDeck.addCard(n17);
// mDeck.addCard(n18);
// mDeck.addCard(n19);
// mDeck.addCard(n20);
// mDeck.addCard(n21);
// mDeck.addCard(n22);
// mDeck.addCard(n23);
// mDeck.addCard(n24);
// mDeck.addCard(n25);
// mDeck.addCard(n26);
// mDeck.addCard(n27);
// mDeck.addCard(n28);
// mDeck.addCard(n29);
// mDeck.addCard(n30);
// mDeck.addCard(n31);
// mDeck.addCard(n32);
// mDeck.addCard(n33);
// mDeck.addCard(n34);
// mDeck.addCard(n35);
// mDeck.addCard(n36);
// mDeck.addCard(n37);
// mDeck.addCard(n38);
// mDeck.addCard(n39);
// mDeck.addCard(n40);
// mDeck.addCard(n41);
// mDeck.addCard(n42);
// mDeck.addCard(n43);
// mDeck.addCard(n44);
// mDeck.addCard(n45);
// mDeck.addCard(n46);
// mDeck.addCard(n47);
// mDeck.addCard(n48);
// mDeck.addCard(n49);
// mDeck.addCard(n50);
// mDeck.addCard(n51);
// mDeck.addCard(n52);
// mDeck.addCard(n53);
// mDeck.addCard(n54);
// mDeck.splitRandomly();






// const jacks = ['dJ', 'hJ', 'sJ', 'cJ'];

// const tens = ['d10', 'h10', 's10', 'c10'];

// const nines = ['d09', 'h09', 's09', 'c09'];

// const eights = ['d08', 'h08', 's08', 'c08'];

// const sevens = ['d07', 'h07', 's07', 'c07'];

// const sixes = ['d06', 'h06', 's06', 'c06'];

// const fives = ['d05', 'h05', 's05', 'c05'];

// const fours = ['d04', 'h04', 's04', 'c04'];

// const threes  = ['d03', 'h03', 's02', 'c02'];

// const twos = ['d02', 'h02', 's02', 'c02'];

// const masterDeck = [jokers, aces, kings, queens, jacks, tens, nines, eights, sevens, sixes, fives, fours, threes, twos];

// let playerDeck = [];

// let computerDeck = [];

// function deal() [
    
// ]


