const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" type="text/css" href="${import.meta.url.match(/.*\//)[0]}/tasklist.css"/>

    <div id="tasklist"></div>`;

const tasktable = document.createElement("template");
tasktable.innerHTML = `
    <table>
        <thead><tr><th>Task</th><th>Status</th></tr></thead>
        <tbody></tbody>
    </table>`;

const taskrow = document.createElement("template");
taskrow.innerHTML = `
    <tr>
        <td></td>
        <td></td>
        <td>
            <select>
                <option value="0" selected>&lt;Modify&gt;</option>
            </select>
        </td>
        <td><button type="button">Remove</button></td>
    </tr>`;

/**
  * TaskList
  * Manage view with list of tasks
  */
class TaskList extends HTMLElement {
    #statuslist = null;
    constructor() {
        super();
        
        const content = template.content.cloneNode(true);
        this.appendChild(content);
        }

    /**
     * @public
     * @param {Array} list with all possible task statuses
     */
    setStatuseslist(allstatuses) {
        if (!Array.isArray(allstatuses)) {
            console.error(`${allstatuses} is not a valid array`);
            return;
        }
        if (allstatuses.length < 1) {
            console.error("The status array must contain atleast one status");
            return;
        }
        this.#statuslist = Array.from(allstatuses);
    }

    /**
     * Add callback to run on change on change of status of a task, i.e. on change in the SELECT element
     * @public
     * @param {function} callback
     */
    changestatusCallback(callback) {
        /**
         * Fill inn the code
         */
    }

    /**
     * Add callback to run on click on delete button of a task
     * @public
     * @param {function} callback
     */
    deletetaskCallback(callback) {
        /**
         * Fill inn the code
         */
    }

    /**
     * Add task at top in list of tasks in the view
     * @public
     * @param {Object} task - Object representing a task
     */
    showTask(task) {
        if (this.#statuslist === null) {
            console.error("You must first provide a list of valid statuses");
            return;
        }
        let tableElm = this.querySelector("table");
        if (tableElm === null) {
            const containerDiv = this.querySelector("div#tasklist");
            if (containerDiv === null) {
                console.error(`Tasklist container div is missing, this component ${this} is broken`);
                return;
            }
            // legg til en kopi av tasktable noden
            containerDiv.appendChild(tasktable.content.cloneNode(true));
        }
        if (!this.#validateTask(task)) {
            return;
        }
        let tableBody = this.querySelector("tbody");
        if (tableBody === null) {
            console.error(`Tasklist table does not have a table body, it will be recreated`);
            tableBody = tableElm.createTBody();
        }
        const newRow = taskrow.content.cloneNode(true);
        newRow.querySelector("tr").id = `task${task.id}`;
        const tds = newRow.querySelectorAll(`td`);
        tds[0].innerText = task.title;
        tds[1].innerText = task.status;
        const statusSelect = newRow.querySelector("select");
        this.#statuslist.forEach((status) => {
            const newStatus = document.createElement("option");
            newStatus.value = status;
            newStatus.innerText = status;
            statusSelect.appendChild(newStatus);
        });
        tableBody.appendChild(newRow);
    }

    /**
     * Update the status of a task in the view
     * @param {Object} task - Object with attributes {'id':taskId,'status':newStatus}
     */
    updateTask(task) {
        const { id = null, status = null } = task;
        if (id === null || !Number.isInteger(id) || id < 0) {
            console.error(`id ${id} is not a valid id`);
            return;
        }
        if (status === null || typeof status !== "string" || status.length < 1) {
            console.error(`status ${status} is not a valid status`);
            return;
        }
        const taskElm = this.querySelector(`#task${id}`); // tr
        // 0 == task text, 1 == task status, 2 == modify status list, 3 == remove btn
        taskElm.children[1].innerText = status;
    }

    /**
     * Remove a task from the view
     * @param {Number} id - ID of task to remove
     */
    removeTask(id) {
        if (!Number.isInteger(id)) {
            console.error(`id ${id} is not an integer`);
            return;
        }
        const taskElement = this.querySelector(`#task${id}`);
        taskElement.remove();
    }

    /**
     * @public
     * @returns {Number} - Number of tasks on display in view
     */
    getNumtasks() {
        const tableRows = this.querySelectorAll("tbody tr");
        return tableRows.length;
    }

    /**
     * Checks if given task is valid
     * @param task the task to check
     * @returns {boolean} true if valid
     */
    #validateTask(task) {
        const { id = null, title = null, status = null } = task;
        let valid = true;
        if (id === null || !Number.isInteger(id) || id < 0) {
            console.error(`id ${id} from new task ${task} is not valid`);
            valid = false;
        }
        if (title === null || typeof title !== "string" || title.length < 1) {
            console.error(`title ${title} from new task ${task} is not valid`)
            valid = false;
        }
        if (status === null || typeof status !== "string" || status.length < 1) {
            console.error(`status ${status} from new task ${task} is not valid`)
            valid = false;
        }
        return valid;
    }
}
customElements.define('task-list', TaskList);