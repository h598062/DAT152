"use strict";

class MyClass {
    created = new Date();

    constructor() {
        this.sayHello = function() { console.log("Hello") };

        document.getElementById("getproperties").addEventListener("click", this.#getproperties.bind(this));
        document.getElementById("readonly").addEventListener("click", this.#readonly.bind(this));
        document.getElementById("writable").addEventListener("click", this.#writable.bind(this));
        document.getElementById("update").addEventListener("click", this.#update.bind(this));
    }

    sayGoodby() {
        console.log("Good bye");
    }

    #getproperties() {
        Reflect.ownKeys(this).forEach(key => {
            const desc = Object.getOwnPropertyDescriptor(this, key);
            console.log(`${key} - writable: ${desc.writable} - configurable: ${desc.configurable}`);
        });
    }

    #readonly() {
        Object.defineProperty(this, "created", { writable: false });
    }

    #writable() {
        Object.defineProperty(this, "created", { writable: true });
    }

    #update() {
        this.created = new Date();
    }
}

const myInstance = new MyClass();
