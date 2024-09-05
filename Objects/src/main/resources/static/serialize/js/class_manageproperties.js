"use strict";

{
    class Student {
        // Using "_" to indicate a "private" property
        _name = "Ole Olsen";

        constructor(name) {
            Object.defineProperty(this, "_name", { "enumerable": false });
            Object.defineProperty(this, "name", {
                "get": function() { return this._name },
                "set": function(name) { this._name = name },
                "enumerable": true
            });


            this._name = name;
        }

        getName() {
            return this._name;
        }
    }

    function init() {
        const student = new Student("Ole Olsen");
        const jsonText = JSON.stringify(student, null, 4);
        console.log(jsonText);
    }

    document.getElementById("serialize").addEventListener("click", init);
}