"use strict";

{
    const student = {
        _name: "Ole Olsen",

        get name() { return this._name },

        set name(name) { this._name = name }
    };

    function init() {
        console.log(`Student name is ${student.name}`);
    }

    document.getElementById("bt").addEventListener("click", init);
}