"use strict";

{
    function init() {

        const student = {};
        Object.defineProperties(student, {
            "givenname": { "value": "Ole",              "enumerable": true },
            "familyname": { "value": "Olsen",            "enumerable": false },
            "address": { "value": "Olsenbakken 22", "enumerable": true }
        });

        Object.entries(student).forEach(
            ([key,value]) => {console.log(`${key}: ${value}`)}
            
        );
    }

    document.getElementById("bt").addEventListener("click", init);
}