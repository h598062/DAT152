"use strict";

{
    function init() {

        const student = {};
        Object.defineProperties(student, {
            "givenname": { "value": "Ole", "writable": true,"enumerable": true },
            "familyname": { "value": "Olsen","enumerable": true }
        });

        console.log(student);
        //const desc = Object.getOwnPropertyDescriptor(student, "familyname");
        //console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}