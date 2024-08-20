const pushbtn = document.getElementById("push");
const popbtn = document.getElementById("pop");
const inputElm = document.getElementById("input");
const outputElm = document.getElementById("output");
const arr = [];

pushbtn.addEventListener("click", () => {
  console.log("PUSH!");
  arr.push(inputElm.value);
  inputElm.value = "";
})
popbtn.addEventListener("click", () => {
  console.log("POP!");
  const newElm = document.createElement("div");
  newElm.textContent = arr.pop();
  outputElm.appendChild(newElm);
})
