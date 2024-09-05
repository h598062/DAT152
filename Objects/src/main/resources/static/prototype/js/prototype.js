"use strict";

class MyClass {
    sayHello() { console.log("Hello") }
}

const myInstance = new MyClass();
Object.prototype.sayGoodbye = function() { console.log("Good bye") }

document.getElementById("hello").addEventListener("click", myInstance.sayHello.bind(myInstance));
document.getElementById("goodbye").addEventListener("click", myInstance.sayGoodbye.bind(myInstance));
