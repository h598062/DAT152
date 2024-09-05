"use strict";

{
    function init() {
        const number = (function(){return 22})();

        console.log(number);
    }

    document.getElementById("bt").addEventListener("click", init);
}