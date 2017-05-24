/**
 * Created by nadamo on 2017. 05. 18..
 */
interface Card {
    suit: string,
    card: string,
}

interface Profile {
    firstName: string,
    lastName: string,
    age?: number,
    height?: number,
    weight?: number
}

function profileWithOptionsInterface(profile:Profile): string {
    return `    name: ${profile.firstName} ${profile.lastName}
    age: ${profile.age}
    height: ${profile.height}
    weight: ${profile.weight}`;
}
let john = {
    firstName: "John",
    lastName: "Doe",
    profession: "Developer"
}
console.log(profileWithOptionsInterface(john));

function pickCardInterface(x: Card[]): number;
function pickCardInterface(x: number): Card;
function pickCardInterface(x: any): any {
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

let pickedCard: Card = pickCardInterface(42);
console.log("pickedCard card: " + pickedCard.card + " of " + pickedCard.suit);

interface Pickable{
    pick(cards: Card[]):number
}

interface Shuffleable{
    shuffle(cards: Card[]):Card[]
}

interface Deck extends Shuffleable, Pickable{
    cards: Card[]
}

let deck:Deck = {
    cards:[
        {suit: "diamonds", card: "2"},
        {suit: "spades", card: "ace"},
        {suit: "hearts", card: "4"},
        {suit: "clubs", card: "jack"}
    ],
    pick: pickCardInterface,
    shuffle: (c:Card[]) => c.reverse()
}
console.log(deck)

interface Point{
    readonly x: number
    y: number
}
let point: Point = {
    x: 10,
    y:10
}
point.y = 15;
//point.x = 25; //Makes an error.
console.log(point);