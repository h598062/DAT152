class Controller {
    #course = "DAT152";

    constructor() {
        document.getElementById("bt").addEventListener("click", this.#sayHello.bind(this));
    }

    #sayHello() {
        window.alert(`Welcome to ${this.#course}`);
    }
}

new Controller;
