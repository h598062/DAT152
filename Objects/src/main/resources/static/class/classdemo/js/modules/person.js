export default class Person {

    // Public field
    _name;

    // Public static field
    static _nameformat = /^\p{Lu}\p{Ll}+(\s+\p{Lu}\p{Ll}+)*$/u;

    constructor(name) { this.setName(name) }

    // Public method
    setName(name) {
        if (!Person._nameformat.test(name)) throw new Error("Wrong format on name");
        this._name = name;
    }
    
    // Public method
    getName() { return this._name ;}

    // Public method
    getInitials() { return Person._getFirstChars(this._nameArray()) }

    // Public method
    toJSON() {
        return {
            name: this.getName(),
            initials: this.getInitials()
        };
    }

    // Public method
    _nameArray() { return this.getName().split(/\s+/) }

    // Public static method
    static _getFirstChars(list) {
        return list.reduce((ac, current) => `${ac}${current[0]}`,"");
    }
}