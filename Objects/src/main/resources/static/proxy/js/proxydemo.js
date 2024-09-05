"use strict";

{
    const student = {
        "_name": "Ole",
        get name() { return this._name },
        set name(name) { this._name = name }
    };

    const handler = {
        get(target, property) {
            if (!property in target) {
                throw new ReferenceError(`No such property "${property}"`);
            } else {
                if (property[0] === "_") {
                    throw new ReferenceError(`No such property "${property}"`);
                } else {
                    return Reflect.get(target, property);
                }
            }
        }
    };

    const proxy = new Proxy(student, handler);

    function getname() {
        console.log(`Name: ${proxy.name}`);
    }

    function getpname() {
        console.log(`Name: ${proxy._name}`);
    }

    document.getElementById("name").addEventListener("click", getname);
    document.getElementById("pname").addEventListener("click", getpname);
}