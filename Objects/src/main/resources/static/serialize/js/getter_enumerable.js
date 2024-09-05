"use strict";

{
    const student = {
        "givenname": null,
        "_reg": /\p{Lu}\p{Ll}+/u,

        getGivenname() { return this.givenname },
        setGivenname(givenname) {
            if (! this._reg.test(givenname)) throw new Error("Wrong format on first name");
            this.givenname = givenname
        }
    };

    // Do not serialize "_givenname" and "_reg"
    Object.defineProperties(student, {
        "_reg": { "enumerable": false }
    });

    function init() {
        student.setGivenname("Ole");
        const jsonText = JSON.stringify(student,null,4);
        console.log(jsonText);
    }

    document.getElementById("bt").addEventListener("click", init);
}