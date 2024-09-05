"use strict";

{
    class Student {
        // Private
        #name = "Ole Olsen";

        // Public
        phone = "12345678";

        constructor(name, phone) {
            this.#name = name;
            this.phone = phone;
        }

        getName() { return this.#name }
        setName(name) { this.#name = name }

        getPhone() {
            return this.phone;
        }
    }

    function init() {
        const student = new Student("Ole Olsen", "6587654");
        const jsonText = JSON.stringify(student, null, 4);
        console.log(jsonText);
    }

    document.getElementById("serialize").addEventListener("click", init);
}