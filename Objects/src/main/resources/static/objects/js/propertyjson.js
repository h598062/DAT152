"use strict";

{
    function init() {
        const student = {
            "givenname": "Ole", 
            "familyname": "Olsen"
        };


        const desc = Object.getOwnPropertyDescriptor(student, "givenname");
        console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}