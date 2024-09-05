"use strict";

const o = {
    _course: "DAT152",

    init: function() {
        document.getElementById("bt").addEventListener("click", this._sayHello.bind(this));
    },

    _sayHello: function() {
        window.alert(`Welcome to ${this._course}`);
    }
};

o.init();
