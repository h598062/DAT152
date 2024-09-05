"use strict";

{
    const student = (
        function() {
            // Private
            let fname = "Ole";
            let lname = "Olsen";

            return {
                // Public
                get firstname() { return fname },
                set firstname(fn) { fname = fn },
                get lastname() { return lname },
                set lastname(ln) { lname = ln }
            }
        }
    )();

    function store() {
        const fnameElm = document.getElementById("fname");
        const firstname = fnameElm.value.trim();
        const lnameElm = document.getElementById("lname");
        const lastname = lnameElm.value.trim();

        if (firstname !== "") {
            fnameElm.value = "";
            student.firstname = firstname;
        }
        if (lastname !== "") {
            lnameElm.value = "";
            student.lastname = lastname;
        }
    }

    function show() {
        document.getElementById("display").textContent = JSON.stringify(student);
    }

    document.getElementById("show").addEventListener("click", show);
    document.getElementById("store").addEventListener("click", store);
}