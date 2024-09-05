export default class Person {

    // Private field
    #name;

    // Private static field
    static #nameformat = /^\p{Lu}\p{Ll}+(\s+\p{Lu}\p{Ll}+)*$/u;

    constructor(name) { this.setName(name) }

    // Public method
    setName(name) {
//        if (!this.constructor.#nameformat.test(name)) throw new Error("Wrong format on name");
        if (!Person.#nameformat.test(name)) throw new Error("Wrong format on name");

        this.#name = name;
    }
    
    // Public method
    getName() { return this.#name }

    // Public method
    getInitials() { return Person.#getFirstChars(this.#nameArray()) }

    // Public method
    toJSON() {
        return {
            name: this.getName(),
            initials: this.getInitials()
        };
    }

    // Private method
    #nameArray() { return this.getName().split(/\s+/) }

    // Private static method
    static #getFirstChars(list) {
        return list.reduce((ac, current) => `${ac}${current[0]}`,"");
    }
}