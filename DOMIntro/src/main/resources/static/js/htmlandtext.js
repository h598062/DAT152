function addWelcome(element,course) {
	element.insertAdjacentHTML("beforeend","<h1>Welcome to <span></span></h1>");
	element.querySelector("span").textContent = course;
}

const rootElement = document.getElementById("root");
addWelcome(rootElement,"DAT152")
