import Student from './modules/studentasperson.js';

const ole = new Student("Ole Olsen","DAT152");
console.log(JSON.stringify(ole));

const per = new Student("Per Hansen","DAT151");
console.log(JSON.stringify(per));
