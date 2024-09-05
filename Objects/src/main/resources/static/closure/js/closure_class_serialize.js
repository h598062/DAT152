"use strict";
{
    class Student {
        constructor(givenname, familyname) {
            // Private
            // givenname, familyname, phone
            let phone = "11223344";

            // Public
            this.getGivenname = () => { return givenname };
            this.setGivenname = (fn) => { givenname = fn };
            this.getFamilyname = () => { return familyname };
            this.setFamilyname = (ln) => { familyname = ln };
            this.getPhone = () => { return phone };
            this.setPhone = (ph) => { phone = ph };
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
            student.setGivenname(givenname);
        }
        if (familyname !== "") {
            familynameElm.value = "";
            student.setFamilyname(familyname);
        }
        if (phone !== "") {
            phoneElm.value = "";
            student.setPhone(phone);
        }
    }

    function show() {
        document.getElementById("display").textContent = JSON.stringify(student);
    }

    document.getElementById("show").addEventListener("click", show);
    document.getElementById("store").addEventListener("click", store);
}