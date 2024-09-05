export default class Student {

    // Private fields
    #givenname;
    #familyname;
    
    // A private static field
    static #numerOfStudents = 0;
    
    constructor(givenname,familyname) {
        this.#givenname = givenname;
        this.#familyname = familyname;
        Student.#numerOfStudents = Student.#numerOfStudents + 1;
    }
    
    // A public method
    /**
     * @public
     * @type {String}
     */
    getInitials() {
        return `${this.#givenname[0]}${this.#familyname[0]}`;
    }
    
    // A public static method
    /**
     * @public
     * @type {String}
     */
    static getLength() {
        return Student.#numerOfStudents;
    }
}
