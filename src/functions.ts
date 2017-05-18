/**
 * Created by nadamo on 2017. 05. 17..
 */
function addNamed(a: number, b: number): number {
    return a + b;
}
console.log('named function addNamed(3,5): ' + addNamed(3, 5));

const addAnonymous = function (a: number, b: number): number {
    return a + b;
}
console.log('anonymous function addAnonymous(10,12): ' + addAnonymous(10, 12));

const addArrow = (a: number, b: number): number => {
    return a + b;
}
console.log('arrow function addArrow(7,8) ' + addArrow(7, 8));

function profile(firstName: string, lastName: string, age: number, height: number, weight: number): string {
    return `    name: ${firstName} ${lastName}
    age: ${age}
    height: ${height}
    weight: ${weight}`;
}
console.log('all arguments required');
console.log(profile("John", "Smith", 35, 180, 85));

function profileWithOptions(firstName: string, lastName: string, age?: number, height?: number, weight?: number): string {
    return `    name: ${firstName} ${lastName}
    age: ${age}
    height: ${height}
    weight: ${weight}`;
}
console.log('example of optional arguments');
console.log(profileWithOptions("John", "Smith"));

function profileWithDefaults(firstName: string, lastName: string, age: number = 18, height: number = 160, weight: number = 60): string {
    return `    name: ${firstName} ${lastName}
    age: ${age}
    height: ${height}
    weight: ${weight}`;
}
console.log('example of default arguments');
console.log(profileWithDefaults("John", "Smith"));

function pickCard(x: { suit: string; card: string; }[]): number;
function pickCard(x: number): { suit: string; card: string; };
function pickCard(x: any): any {
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    let cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", 'king'];
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        x = x<0 ? 0 : Math.floor(x);
        let pickedSuit = Math.floor(x / 13) % 4;
        return {suit: suits[pickedSuit], card: cards[x % 13]};
    }
}

let myDeck: {suit: string, card: string}[] = [
    {suit: "diamonds", card: "2"},
    {suit: "spades", card: "10"},
    {suit: "hearts", card: "4"}
    ];

let pickedCardFromDeck: {suit: string, card: string} = myDeck[pickCard(myDeck)];
console.log("pickedCardFromDeck card: " + pickedCardFromDeck.card + " of " + pickedCardFromDeck.suit);

let randomCard: {suit: string, card: string} = pickCard(6);
console.log("randomCard card: " + randomCard.card + " of " + randomCard.suit);

let pickedCardFromDeck2: {suit: string, card: string} = myDeck[pickCard(myDeck)];
console.log("pickedCardFromDeck2 card: " + pickedCardFromDeck2.card + " of " + pickedCardFromDeck2.suit);

let randomCard2: {suit: string, card: string} = pickCard(28);
console.log("randomCard2 card: " + randomCard2.card + " of " + randomCard2.suit);
