"use strict";

{
    class Student {
        #name = "Ole Olsen";
        #phone = "12345678";

        constructor(name,phone) {
            this.#name = name;
            this.#phone = phone;
        }

        getName() { return this.#name; }
        setName(name) { this.#name = name; }
        getPhone() { return this.#phone; }
        setPhone(phone) { this.#phone = phone; }

        toJSON() {
            return {
                name: this.getName(),
                phone: this.getPhone()
            }
        }    }

    function init() {
        const student = new Student("Ole Olsen", "6587654");
        const jsonText = JSON.stringify(student, null, 4);
        console.log(jsonText);
    }

    document.getElementById("serialize").addEventListener("click", init);
}