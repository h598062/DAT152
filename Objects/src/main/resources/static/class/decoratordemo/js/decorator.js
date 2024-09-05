"use strict";

function save(_value, { kind, name }) {
    if (kind === "field") {
        return function(initvalue) {
            if (this.save === undefined) {
                this.save = new Map();
            }
            this.save.set(name, initvalue);
            return initvalue;
        };
    }
}

function log(value, { kind, name }) {
    if (kind === "field") {
        return function(initvalue) {
            console.log(`Field "${name}" was initilized to value "${initvalue}"`);
            return initvalue;
        };
    } else if (kind === "method") {
        return function (...args) {
            console.log(`Starting ${name} with arguments ${args.join(", ")}`);
            const start = Date.now();
            const ret = value.call(this, ...args);
            const millis = Date.now() - start;
            console.log(`Execution of "${name}" took ${millis} milliseconds`);
            return ret;
        };
    }
}

function readonly(value, { kind, name }) {
    if (kind === "accessor") {
        let { get } = value;

        return {
            get() {
                return get.call(this);
            },
            set() {
                throw new TypeError(`${name} is read-only`);
            },
            init(initvalue) {
                return initvalue;
            }
        }
    }
}

class MyClass {
    @save
    @log
    created = new Date();

    @readonly
    accessor x = 1;
    // x = 1;  // Can be replaced with the two lines above
    
    @log
    sum(...numbers) {
        return numbers.reduce((a,b) => a+b);
    }

    /* More code */
}

function calculate() {
    const myInstance = new MyClass();
    
    const sum = myInstance.sum(myInstance.x,3,7);
    console.log(`Answer is ${sum}`);

    /* More code */
}

function init() {
    document.getElementById("sum").addEventListener("click", calculate);
}

document.addEventListener("DOMContentLoaded", init);
