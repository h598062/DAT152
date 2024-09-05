"use strict";

{
    const student = (
        function() {
            // Private
            let givenname = "Ole";
            let familyname = "Olsen";

            return {
                // Public
                getFirstname() { return givenname },
                setFirstname(fn) { givenname = fn },
                getLastname() { return familyname },
                setLastname(ln) { familyname = ln }
            }
        }
    )();

    function store() {
        const givennameElm = document.getElementById("givenname");
        const givenname = givennameElm.value.trim();
        const familynameElm = document.getElementById("familyname");
        const familyname = familynameElm.value.trim();

        if (givenname !== "") {
            givennameElm.value = "";
            student.setGivenname(givenname);
        }
        if (familyname !== "") {
            familynameElm.value = "";
            student.setFamilyname(familyname);
        }
    }

    function show() {
        document.getElementById("display").textContent = JSON.stringify(student);
    }

    document.getElementById("show").addEventListener("click", show);
    document.getElementById("store").addEventListener("click", store);
}