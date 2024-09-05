"use strict";

{
    function init() {

        const student = {};
        Object.defineProperty(student, "givenname", {
            "value": "Ole",
            "writable": true,
            "enumerable": true,
            "configurable": false
        });

        const desc = Object.getOwnPropertyDescriptor(student, "givenname");
        console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}