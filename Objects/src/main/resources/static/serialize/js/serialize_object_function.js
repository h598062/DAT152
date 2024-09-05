"use strict";

{
    const student = {
        // Using "_" to indicate a "private" property
        "_name": "Ole Olsen",

        "getName": function() { return this._name },
        "setName": function(name) { this._name = name }
    };

    function init() {
        const jsonText = JSON.stringify(student,null,4);
        console.log(jsonText);
    }

    document.getElementById("serialize").addEventListener("click", init);
}