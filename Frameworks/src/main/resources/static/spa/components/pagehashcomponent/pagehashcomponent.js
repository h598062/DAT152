const template = document.createElement("template");
template.innerHTML = `
    <h1 id="header"></h1>

    <p>Open network tab in browser and observe that non of the below links results in a server request.</p>

    <p id="info"></p>

    <p>URLs in application:</p>
    <ul>
        <li><a href="#">#</a></li>
        <li><a href="#pageOne">#pageOne</a></li>
        <li><a href="#pageTwo">#pageTwo</a></li>
    </ul>`;

class Page extends HTMLElement {
    #shadow;

    constructor() {
        super();

        this.#shadow = this.attachShadow({ mode: 'closed' });
        const content = template.content.cloneNode(true);
        this.#shadow.appendChild(content);
    }

    /**
      * @public
      * @param{String} info
      */
    setInfo(info) {
        this.#shadow.getElementById("info").textContent = info;
    }

    /**
      * @public
      * @param{String} header
      */
    setHeader(header) {
        this.#shadow.getElementById("header").textContent = header;
    }
}

customElements.define('page-component', Page);
