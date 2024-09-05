"use strict";

{
    class Student {
        // A private property
        #name = "Ole Olsen";

        constructor(name) {
            this.#name = name;
        }

        get name() { return this.#name }

        set name(name) { this.#name = name }

        getName() {
            return this.#name;
        }
    }

    function init() {
        const student = new Student("Ole Olsen");
        const jsonText = JSON.stringify(student, null, 4);
        console.log(jsonText);
    }

    document.getElementById("serialize").addEventListener("click", init);
}