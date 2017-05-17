/**
 * Created by nadamo on 2017. 05. 16..
 */
var myVar: number = 111;
let myLet: number = 222;
const myConst: number = 333;

const myConstPoint: { x: number, y: number, z?: number } = {x: 3, y: 4, z: 5}
let myArray: string[] = ["elso", "masodik", "harmadik", "negyedik"];

if (true) {
    var myVar: number = 444;
}
console.log(myVar);

if (true) {
    let myLet: number = 555;
}
console.log(myLet);

//myConst = 666;

myConstPoint.x = 15;
console.log(myConstPoint);

let [,second,,fourth] = myArray;
console.log(second, fourth);

let {x:x2, z} = myConstPoint;
console.log(x2, z);