"use strict";

{
    const text = '{ "_name": "Ole Olsen", "getName": function() { return this._name }, "setName": function(name) { this._name = name }}';

    function init() {
        const object = JSON.parse(text);
        console.log(object);
    }

    document.getElementById("parse").addEventListener("click", init);
}