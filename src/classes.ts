/**
 * Created by nadamo on 2017. 05. 19..
 */
enum ChessColors {Black, White}

abstract class ChessPiece {
    _row: number;
    _column: string;
    readonly _setColor: ChessColors;
    _captured: boolean = false;

    abstract moveTo(row: number, column: string): void

    constructor(row: number, column: string, color: ChessColors) {
        this._row = row;
        this._setColor = color;
        this._column = column;
    }

    capture() {
        this._captured = true
    }

}
interface DiagonalMove {
    hasDiagonalMove: boolean;
}

class Pawn extends ChessPiece {
    moveTo(r: number, c: string) {

    }

}

class Bishop extends ChessPiece implements DiagonalMove {
    readonly hasDiagonalMove: boolean = true;

    moveTo(r: number, c: string) {

    }

}

let cp: ChessPiece = new Bishop(8, "A", ChessColors.Black);
let pawn = new Pawn(8, "A", ChessColors.Black);
console.log(cp);
console.log(pawn);

class Animal {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    sayName() {
        console.log(this._name);
    }
}

let snake = new Snake("Sziszi");
snake.sayName();

class User {
    private _firstName: string;
    private _lastName: string;

    get name(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    set name(name: string) {
        let names = name.split(' ');
        this._firstName = names[0];
        this._lastName = names[1];
    }
}

let bob = new User();
bob.name = "Robert Redford";
console.log(bob.name);
