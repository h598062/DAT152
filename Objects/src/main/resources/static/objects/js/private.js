"use strict";

{
    const person = {
        #name: "Ole Olsen",

        get name() { return this.#name },
        set name (name) { this.#name = name }
    };

    function init() {
        const jsonText = JSON.stringify(person,null,4);
        console.log(jsonText);
    }

    document.getElementById("bt").addEventListener("click", init);
}