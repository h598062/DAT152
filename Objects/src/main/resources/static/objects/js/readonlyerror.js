"use strict";

{
    function init() {
        const student = {};
        Object.defineProperty(student, "givenname", { "value": "Ole" });

        student.givenname = "Per"; // Will fail
    }

    document.getElementById("bt").addEventListener("click", init);
}