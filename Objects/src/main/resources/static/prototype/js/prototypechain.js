"use strict";
{
    class MyClass {
        sayHello() { console.log("Hello") }
    }

    const myInstance = new MyClass();

    myInstance.sayWelcome = function() {console.log("Welcome")};

    Object.prototype.sayGoodbye = function() { console.log("Good bye") }

    function check(object, property) {
        if (Object.getOwnPropertyNames(object).includes(property)) {
            console.log(`Has property "${property}"`)
        } else {
            console.log(`Does not have property "${property}"`)
        }
    }

    function init() {
        document.getElementById("instance").addEventListener("click", () => {
            const property = document.getElementById("property").value.trim();
            const object = myInstance;
            check(object, property);
        });

        document.getElementById("class").addEventListener("click", () => {
            const property = document.getElementById("property").value.trim();
            const object = MyClass.prototype;
            check(object, property);
        });

        document.getElementById("constructor").addEventListener("click", () => {
            const property = document.getElementById("property").value.trim();
            const object = Object.getPrototypeOf(myInstance);
            // console.log(object);
            check(object, property);
        });

        document.getElementById("object").addEventListener("click", () => {
            const property = document.getElementById("property").value.trim();
            const object = Object.getPrototypeOf(Object.getPrototypeOf(myInstance));
            // console.log(object);
            check(object, property);
        });
    }

    document.addEventListener("DOMContentLoaded", init);
}
