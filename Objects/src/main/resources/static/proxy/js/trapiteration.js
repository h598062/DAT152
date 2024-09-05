"use strict";

{
    const student = {
        _givenname: "Ole",
        _familyname: "Olsen",

        get givenname() { return this._givenname },
        set givenname(givenname) { this._givenname = givenname },
        get familyname() { return this._familyname },
        set familyname(familyname) { this._familyname = familyname }
    };

    const handler = {
        "ownKeys": function(target) {
            return Reflect.ownKeys(target).filter(key => key[0] !== "_");
        }
    };

    const proxy = new Proxy(student, handler);

    function init() {
        const jsonText = JSON.stringify(proxy, null, 4);
        console.log(jsonText);
    }

    document.getElementById("bt").addEventListener("click", init);
}