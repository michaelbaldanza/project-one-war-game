

class Card {
    constructor(cssname, cardname, value) {
        this.cardname = cardname;
        this.cssname = cssname;
        this.value = value;
    };
};


let mDeck = [
    new Card('Ace of Diamonds', 'dA', 14),
    new Card('King of Diamonds', 'dK', 13),
    new Card('Queen of Diamonds', 'dQ', 12),
    new Card('Jack of Diamonds', 'dJ', 11),
    new Card('Ten of Diamonds', 'd10', 10),
    new Card('Nine of Diamonds', 'd09', 9),
    new Card('Eight of Diamonds', 'd08', 8),
    new Card('Seven of Diamonds', 'd07', 7),
    new Card('Six of Diamonds', 'd06', 6),
    new Card('Five of Diamonds', 'd05', 5),
    new Card('Four of Diamonds', 'd04', 4),
    new Card('Three of Diamonds', 'd03', 3),
    new Card('Two of Diamonds', 'd02', 2),
    new Card('Ace of Hearts', 'hA', 14),
    new Card('King of Hearts', 'hK', 13),
    new Card('Queen of Hearts', 'hQ', 12),
    new Card('Jack of Hearts', 'hJ', 11),
    new Card('Ten of Hearts', 'h10', 10),
    new Card('Nine of Hearts', 'h09', 9),
    new Card('Eight of Hearts', 'h08', 8),
    new Card('Seven of Hearts', 'h07', 7),
    new Card('Six of Hearts', 'h06', 6),
    new Card('Five of Hearts', 'h05', 5),
    new Card('Four of Hearts', 'h04', 4),
    new Card('Three of Hearts', 'h03', 3),
    new Card('Two of Hearts', 'h02', 2),
    new Card('Ace of Spades', 'sA', 14),
    new Card('King of Spades', 'sK', 13),
    new Card('Queen of Spades', 'sQ', 12),
    new Card('Jack of Spades', 'sJ', 11),
    new Card('Ten of Spades', 's10', 10),
    new Card('Nine of Spades', 's09', 9),
    new Card('Eight of Spades', 's08', 8),
    new Card('Seven of Spades', 's07', 7),
    new Card('Six of Spades', 's06', 6),
    new Card('Five of Spades', 's05', 5),
    new Card('Four of Spades', 's04', 4),
    new Card('Three of Spades', 's03', 3),
    new Card('Two of Spades', 's02', 2),
    new Card('Ace of Clubs', 'cA', 14),
    new Card('King of Clubs', 'cK', 13),
    new Card('Queen of Clubs', 'cQ', 12),
    new Card('Jack of Clubs', 'cJ', 11),
    new Card('Ten of Clubs', 'c10', 10),
    new Card('Nine of Clubs', 'c09', 9),
    new Card('Eight of Clubs', 'c08', 8),
    new Card('Seven of Clubs', 'c07', 7),
    new Card('Six of Clubs', 'c06', 6),
    new Card('Five of Clubs', 'c05', 5),
    new Card('Four of Clubs', 'c04', 4),
    new Card('Three of Clubs', 'c03', 3),
    new Card('Two of Clubs', 'c02', 2),
    new Card('Red Joker', 'rJ', 15),
    new Card('Black Joker', 'bJ', 15),
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


// let p1Deck = mDeck.splice(27, 27);
// let p2Deck = mDeck.splice(0, 27);
// let p1Discard = [];
// let p2Discard = [];

// function takeTurn() {
//     if (p1Deck[0].value > p2Deck[0].value) {
//         let transferCard = p1Deck.shift();
//         let transferCard2 = p2Deck.shift();
//         p1Deck.push(transferCard);
//         p1Deck.push(transferCard2);
//    } //else if ....

//     //else war
//     //}
// };

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


