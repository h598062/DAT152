"use strict";
{
    class Student {
        constructor(givenname, familyname) {
            // Private
            // givenname, familyname, phone
            let phone = "11223344";

            // Public
            Object.defineProperties(this, {
                "givenname": {
                    "set": function(fn) { givenname = fn },
                    "get": function() { return givenname }
                },
                "familyname": {
                    "set": function(ln) { familyname = ln },
                    "get": function() { return familyname }
                },
                "phone": {
                    "set": function(pn) { phone = pn },
                    "get": function() { return phone }
                }
            });
        }
    }

    const student = new Student("Ole", "Olsen");

    function store() {
        const givennameElm = document.getElementById("givenname");
        const givenname = givennameElm.value.trim();
        const familynameElm = document.getElementById("familyname");
        const familyname = familynameElm.value.trim();
        const phoneElm = document.getElementById("phone");
        const phone = phoneElm.value.trim();


        if (givenname !== "") {
            givennameElm.value = "";
            student.givenname = givenname;
        }
        if (familyname !== "") {
            familynameElm.value = "";
            student.familyname = familyname;
        }
        if (phone !== "") {
            phoneElm.value = "";
            student.phone = phone;
        }
    }

    function show() {
        document.getElementById("display").textContent = `${student.givenname} ${student.familyname} has phone ${student.phone}`;
    }

    document.getElementById("show").addEventListener("click", show);
    document.getElementById("store").addEventListener("click", store);
}