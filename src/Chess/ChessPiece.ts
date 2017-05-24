/**
 * Created by nadamo on 2017. 05. 22..
 */
import {ChessColors} from './Color';

export abstract class ChessPiece {
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
