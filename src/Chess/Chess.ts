/**
 * Created by nadamo on 2017. 05. 22..
 */
//import {Chess} from './ChessPiece';
import {Pawn} from './Pawn';
import {Bishop} from './Bishop';
import Color from './Color';
//import { ChessColors as Color }from './Color'
//import './asd'

let pawn = new Pawn(1, "A", Color.Black);
let bishop = new Bishop(2,"B", Color.White)

console.log(pawn);
console.log(bishop);

