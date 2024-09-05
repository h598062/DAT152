"use strict";

{
    const student = {
        "givenname": null,
        "familyname": null
    };
    Object.seal(student);

    document.getElementById("set").addEventListener("click", setValues);
    document.getElementById("add").addEventListener("click", addProperty);
    document.getElementById("show").addEventListener("click", () => {console.log(student)});

    function setValues() {
        student.givenname = "Ole";
        student.familyname = "Olsen";
    }

    function addProperty() {
        student.phone = "11223344";
    }
}
