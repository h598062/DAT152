"use strict";

{
    class Student {
        #name = "Ole Olsen";
        phone = "12345678";

        constructor(name, phone) {
            this.#name = name;
            this.phone = phone;
        }

        get name() { return this.#name }
        set name(name) { this.#name = name }

        getName() {
            return this.#name;
        }

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