/**
 * Created by nadamo on 2017. 05. 16..
 */
let numberList: number[] = [1,2,3];
console.log(numberList);
let genericNumberArray: Array<number> = [1,2,3];
console.log(genericNumberArray);
let anyList: any[] = [1,true, "three"];
console.log(anyList);
let stringList: string[] = new Array(10);
console.log(stringList);
let idNameTuple: [number, string] = [1, 'John Doe']
console.log(idNameTuple);
let id: number = idNameTuple[0];
let tname: string = idNameTuple[1];
