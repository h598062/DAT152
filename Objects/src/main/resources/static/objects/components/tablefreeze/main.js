export default class extends HTMLElement {
    _cssfile = "main.css";

    _array = [];

    constructor() {
        super();

        this._append = this._append.bind(this);
        this._show = this._show.bind(this);
        this._modify = this._modify.bind(this);
        this._freeze = this._freeze.bind(this);

        // Entry point to the shadow DOM
        this._shadow = this.attachShadow({ mode: 'closed' });
        this._createLink();
        this._createHTML();

        this._shadow.querySelector("#append > button").addEventListener("click", this._append);
        this._shadow.querySelector("#showvalue > button").addEventListener("click", this._show);
        this._shadow.querySelector("#modify > button").addEventListener("click", this._modify);
        this._shadow.querySelector("#freeze > button").addEventListener("click",() => { Object.freeze(this._array) });
    }

    _append() {
        const inputElement = this._shadow.querySelector('#append > input[type="text"]');
        const value = inputElement.value.trim();
        if (value === "") return;

        this._array.push(value);


        this._shadow.querySelectorAll('.arrayhandler > input').forEach(
            element => {
                element.disabled = false;
                element.max = this._array.length - 1;
            }
        );
        this._shadow.querySelectorAll('.arrayhandler button').forEach(
            element => { element.disabled = false }
        );

        inputElement.value = "";
        this._shadow.querySelector('#append > span').textContent = this._array.length;
        inputElement.focus();
    }

    _show() {
        const index = this._shadow.querySelector('#showvalue > input[type="number"]').value.trim();
        if (index == "") return;
        if (index > this._array.length) return;
        this._shadow.querySelector('#showvalue span').textContent = this._array[index];
    }

    _modify() {
        const indexElm = this._shadow.querySelector('#modify > input[type="number"]')
        const index = indexElm.value.trim();
        if (index == "") return;
        if (index > this._array.length) return;

        const valueElm = this._shadow.querySelector('#modify >input[type="text"]');
        const value = valueElm.value.trim();
        if (value == "") return;
        this._array[index] = value;
        valueElm.value = "";
        valueElm.focus();
    }

    _freeze() {
        Object.freeze(this._array);
    }

    _createLink() {
        const link = document.createElement('link');

        const path = import.meta.url.match(/.*\//)[0];
        link.href = path.concat(this._cssfile);
        link.rel = "stylesheet";
        link.type = "text/css";
        this._shadow.appendChild(link);
    }

    _createHTML() {
        const wrapper = document.createElement('div');
        wrapper.id = "wrapper";

        const content = `
            <form>
                <fieldset id="append">
                    <legend>Append value to Array</legend>
                    <label for="appendvalue">Value</label> <input type="text" id="appendvalue"></input>
                    <button type="button">Append value to end of Array</button> Length: <span>0</span>
                </fieldset>

                <fieldset id="modify" class="arrayhandler">
                    <legend>Modify value at index</legend>
                    <label for="atindex">Index</label>
                    <input type="number" id="atindex" disabled value="0" min="0" max="0" disabled></input>
                    <label for="valueatindex">Value</label> <input type="text" id="valueatindex" disabled></input>
                    <button type="button" disabled>Set value at at index</button>
                </fieldset>

                <fieldset id="showvalue" class="arrayhandler">
                    <legend>Show number at index</legend>
                    <label for="indexshow">Index</label>
                    <input type="number" id="indexshow" disabled value="0" min="0" max="0" disabled></input>
                    <button type="button" disabled>Show number at index</button>
                    <span>No value yet</span>
                </fieldset>

                <fieldset id="freeze">
                    <legend>Freeze array</legend>
                    <button type="button">Freeze Array</button>
                </fieldset>
            </form>
        `;
        wrapper.insertAdjacentHTML('beforeend', content);
        this._shadow.appendChild(wrapper);

        //return wrapper;
    }
}

