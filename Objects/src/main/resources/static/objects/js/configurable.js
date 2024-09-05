"use strict";

{
    const student = {};
    Object.defineProperties(student, {
        "givenname": { "value": "Ole",   "enumerable": true, "configurable": true },
        "familyname": { "value": "Olsen", "enumerable": true, "configurable": false },
    });

    document.getElementById("iterate").addEventListener("click", () => {
        console.clear();
        Object.entries(student).forEach(
            ([key, value]) => {
                console.log(`${key}: ${value}`);
                const desc = Object.getOwnPropertyDescriptor(student, key);
                console.log(desc);
            }
        )
    });

    document.getElementById("deleteGivenname").addEventListener("click", () => { delete student.givenname });
    document.getElementById("deleteFamilyname").addEventListener("click", () => { delete student.familyname });
    document.getElementById("changeGivenname").addEventListener("click", () => {
        Object.defineProperty(student, "givenname", { "writable": true })
    });

    document.getElementById("changeFamilyname").addEventListener("click", () => {
        Object.defineProperty(student, "familyname", { "writable": true })
    });
}