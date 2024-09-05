"use strict";

{
    function init() {
        const number = (() => 22)();

        console.log(number);
    }

    document.getElementById("bt").addEventListener("click", init);
}