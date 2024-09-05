"use strict";

{
    function init() {

        const student = {"givenname": "Ole"};
        Object.defineProperty(student, "givenname", {
            "writable": true,
            "enumerable": true,
            "configurable": false
        });

        const desc = Object.getOwnPropertyDescriptor(student, "givenname");
        console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}