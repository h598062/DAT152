"use strict";

{
    const student = {};

    Object.defineProperties(student, {
        "_name": { "value": "Ole Olsen" },
 
        "name": {
            "set": function(name) {
                this._name = name
            },
            "get": function() { return this._name }
        }

    });

    function init() {
        console.log(`Student name is ${student.name}`);
    }

    document.getElementById("bt").addEventListener("click", init);
}