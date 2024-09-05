"use strict";

{
    const student = {};

    Object.defineProperties(student, {
        // Do not serialize "_givenname" and "_reg"
        "_givenname": { "writable": true, "enumerable": false },
        "_reg": { "value": /\p{Lu}\p{Ll}+/u, "enumerable": false },

        "givenname": {
            "enumerable": true, // Can be serialized
            "set": function(givenname) {
                if (!this._reg.test(givenname)) throw new Error("Wrong format on first name");
                this._givenname = givenname
            },
            "get": function() { return this._givenname }

        }
    });


    function init() {
        student.givenname = "Ole";
        const jsonText = JSON.stringify(student,null,4);
        console.log(jsonText);
    }

    document.getElementById("bt").addEventListener("click", init);
}