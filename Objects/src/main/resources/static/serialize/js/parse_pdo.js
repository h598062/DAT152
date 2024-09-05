"use strict";

{
    const text = '{ "givenname": "Ole", "familyname": "Olsen"}';

    function init() {
        const object = JSON.parse(text);
        console.log(object);
    }

    document.getElementById("parse").addEventListener("click", init);
}