
/**
 * Will need an absolute path here for the demonstration using the Babel standalone
 * library.
 * For standard JavaScript, the module path is relative to the JavaScript document with the import, but
 * for the Babel standalone library the path is relative to the HTML document!
 **/
import Person from '/Objects/class/classdemo/js/modules/personprivate.js';

const ole = new Person("Ole Olsen");
console.log(JSON.stringify(ole));

const per = new Person("Per Hansen");
console.log(JSON.stringify(per));
