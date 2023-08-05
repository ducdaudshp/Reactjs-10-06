import React from 'react'
import Task from './Task'

function ListTask({ renderListTasks, onEdit, onDelete }) {

    const handleEdit = (toggle, task) => {
        onEdit(toggle, task);
    }

    const handleDelete = (toggle, task) => {
        onDelete(toggle, task)
    }
    //render task
    let elementTask = renderListTasks.map((task, index) => {
        return <Task key={index} renderTask={task} onEdit={handleEdit} onDelete={handleDelete}/>
    })

    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} className="text-center">
                            #
                        </th>
                        <th>Task</th>
                        <th style={{ width: "20%" }} className="text-center">
                            Level
                        </th>
                        <th style={{ width: "20%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementTask}
                </tbody>
            </table>
        </div>
    )
}

export default ListTask