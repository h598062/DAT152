"use strict";

{
    function init() {
        const student = (
            function() {
                return {
                    "givenname": "Ole",
                    "familyname": "Olsen"
                }
            }
        )();

        console.log(JSON.stringify(student, null, 4));
    }

    document.getElementById("bt").addEventListener("click", init);
}