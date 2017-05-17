/**
 * Created by nadamo on 2017. 05. 15..
 */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

const hello = new Greeter('world!');

console.log(hello.greet());