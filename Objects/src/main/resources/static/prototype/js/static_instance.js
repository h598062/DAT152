"use strict";

class MyClass {
    static first = new Date();

    constructor() {
        document.getElementById("getproperties").addEventListener("click", this.#getproperties.bind(this));
        document.getElementById("readonly").addEventListener("click", this.#readonly.bind(this));
        document.getElementById("writable").addEventListener("click", this.#writable.bind(this));
        document.getElementById("update").addEventListener("click", this.#update.bind(this));
    }


    #getproperties() {
        const desc = Object.getOwnPropertyDescriptor(this.constructor, "first");
        console.log(desc);
    }

    #readonly() {
        Object.defineProperty(MyClass, "first", { writable: false });
    }

    #writable() {
        Object.defineProperty(MyClass, "first", { writable: true });
    }

    #update() {
        MyClass.first = new Date();
    }
}

const myInstance = new MyClass();
