import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


function TaskList() {
    const tasks = [
        {"id": 1, "title":"Paint roof","status":"WAITING"},
        {"id": 2, "title":"Clean floor","status":"DONE"},
        {"id": 3, "title":"Wash windows","status":"ACTIVE"}
    ]

    const taskHTMLRows = tasks.map(task => <tr data-identity={task.id}><td>{task.title}</td><td>{task.status}</td></tr>);

    return (
        <table>
            <thead>
                <tr><th>Task</th><th>Status</th></tr>
            </thead>
            <tbody>
                {taskHTMLRows}
            </tbody>
        </table>
    )
}


function TasksView() {
    return (
       <React.Fragment>
            <h1>Task list</h1>

            <TaskList />
        </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TasksView />);
