"use strict";

{
    const student = (
        function() {
            // Private
            let givenname = "Ole";
            let familyname = "Olsen";

            return {
                // Public
                getGivenname() { return givenname },
                setGivenname(fn) { givenname = fn },
                getFamilyname() { return familyname },
                setFamilyname(ln) { familyname = ln }
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
        document.getElementById("display").textContent = `${student.getGivenname()} ${student.getFamilyname()}`;
    }

    document.getElementById("show").addEventListener("click", show);
    document.getElementById("store").addEventListener("click", store);
}