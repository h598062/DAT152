"use strict";

{
    function usingClass() {
        class MyClass { }
        const myInstance = new MyClass();
        console.log(`typeof MyClass: ${typeof MyClass}`);
        console.log(`typeof myInstance: ${typeof myInstance}`);
    }

    function usingFunction() {
        function MyClass() { }
        const myInstance = new MyClass();
        console.log(`typeof MyClass: ${typeof MyClass}`);
        console.log(`typeof myInstance: ${typeof myInstance}`);
    }


    document.getElementById("class").addEventListener("click", usingClass);
    document.getElementById("constructor").addEventListener("click", usingFunction);
}
