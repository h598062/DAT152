"use strict";

{
    const student = {
        // Using "_" to indicate a "private" property
        "_name": "Ole Olsen",

        getName() { return this._name },
        setName(name) { this._name = name },
        
        toJSON() {
            return {
                "name": this.getName()
            }
        }
    };

    function init() {
        const jsonText = JSON.stringify(student,null,4);
        console.log(jsonText);
    }

    document.getElementById("serialize").addEventListener("click", init);
}