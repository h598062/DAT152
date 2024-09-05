"use strict";

{
    function init() {
        const student = {};
        student.givenname = "Ole";

        const desc = Object.getOwnPropertyDescriptor(student, "givenname");
        console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}