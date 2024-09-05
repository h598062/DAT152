import Person from './person.js';

export default class Student extends Person {

    // Private field
    #course;

    // Private static field
    static #courseformat = /^\p{Lu}{3}\d{3}$/u;

    constructor(name, course) {
        super(name); // Calling parent constructor and initializing 'this'
        this.setCourse(course);
    }

    // Public method
    setCourse(course) {
        if (!Student.#courseformat.test(course)) throw new Error("Wrong course format");
        this.#course = course;
    }

    // Public method
    getCourse() { return this.#course }

    // Public method
    toJSON() {
        return {
            name: this.getName(),
            course: this.getCourse()
        };
    }
}