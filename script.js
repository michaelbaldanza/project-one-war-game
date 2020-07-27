class Card {
    constructor(cssname, cardname, value) {
        this.cardname = cardname;
        this.cssname = cssname;
        this.value = value;
    };
};

class Deck {
    constructor(topCard, nOfCards, contents) {
        this.topCard = topCard;
        this.contents = [];
        this.nOfCards = contents.length;
    };
};

const n01 = new Card('Ace of Diamonds', 'dA', 14);
const n02 = new Card('King of Diamonds', 'dK', 13);
const n03 = new Card('Queen of Diamonds', 'dQ', 12);
const n04 = new Card('Jack of Diamonds', 'dJ', 11);
const n05 = new Card('Ten of Diamonds', 'd10', 10);
const n06 = new Card('Nine of Diamonds', 'd09', 9);
const n07 = new Card('Eight of Diamonds', 'd08', 8);
const n08 = new Card('Seven of Diamonds', 'd07', 7);
const n09 = new Card('Six of Diamonds', 'd06', 6);
const n10 = new Card('Five of Diamonds', 'd05', 5);
const n11 = new Card('Four of Diamonds', 'd04', 4);
const n12 = new Card('Three of Diamonds', 'd03', 3);
const n13 = new Card('Two of Diamonds', 'd02', 2);
const n14 = new Card('Ace of Hearts', 'hA', 14);
const n15 = new Card('King of Hearts', 'hK', 13);
const n16 = new Card('Queen of Hearts', 'hQ', 12);
const n17 = new Card('Jack of Hearts', 'hJ', 11);
const n18 = new Card('Ten of Hearts', 'h10', 10);
const n19 = new Card('Nine of Hearts', 'h09', 9);
const n20 = new Card('Eight of Hearts', 'h08', 8);
const n21 = new Card('Seven of Hearts', 'h07', 7);
const n22 = new Card('Six of Hearts', 'h06', 6);
const n23 = new Card('Five of Hearts', 'h05', 5);
const n24 = new Card('Four of Hearts', 'h04', 4);
const n25 = new Card('Three of Hearts', 'h03', 3);
const n26 = new Card('Two of Hearts', 'h02', 2);
const n27 = new Card('Ace of Spades', 'sA', 14);
const n28 = new Card('King of Spades', 'sK', 13);
const n29 = new Card('Queen of Spades', 'sQ', 12);
const n30 = new Card('Jack of Spades', 'sJ', 11);
const n31 = new Card('Ten of Spades', 's10', 10);
const n32 = new Card('Nine of Spades', 's09', 9);
const n33 = new Card('Eight of Spades', 's08', 8);
const n34 = new Card('Seven of Spades', 's07', 7);
const n35 = new Card('Six of Spades', 's06', 6);
const n36 = new Card('Five of Spades', 's05', 5);
const n37 = new Card('Four of Spades', 's04', 4);
const n38 = new Card('Three of Spades', 's03', 3);
const n39 = new Card('Two of Spades', 's02', 2);
const n40 = new Card('Ace of Clubs', 'cA', 14);
const n41 = new Card('King of Clubs', 'cK', 13);
const n42 = new Card('Queen of Clubs', 'cQ', 12);
const n43 = new Card('Jack of Clubs', 'cJ', 11);
const n44 = new Card('Ten of Clubs', 'c10', 10);
const n45 = new Card('Nine of Clubs', 'c09', 9);
const n46 = new Card('Eight of Clubs', 'c08', 8);
const n47 = new Card('Seven of Clubs', 'c07', 7);
const n48 = new Card('Six of Clubs', 'c06', 6);
const n49 = new Card('Five of Clubs', 'c05', 5);
const n50 = new Card('Four of Clubs', 'c04', 4);
const n51 = new Card('Three of Clubs', 'c03', 3);
const n52 = new Card('Two of Clubs', 'c02', 2);
const n53 = new Card('Red Joker', 'rJ', 15);
const n54 = new Card('Black Joker', 'bJ', 15);

const masterDeck = [n01, n02, n03, n04, n05, n06, n07, n08, n09, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19, n20, n21, n22, n23, n24, n25, n26, n27, n28, n29, n30, n31, n32, n33, n3]

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

let playerDeck = [];

let computerDeck = [];

function deal() [
    
]


