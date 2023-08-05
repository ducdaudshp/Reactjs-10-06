import React from 'react'

function Task({ renderTask, onEdit, onDelete }) {

    let elementLevel = "";
    if (renderTask.level === 0 || renderTask.level === "0") {
        elementLevel = <span className="label label-default">Small</span>
    } else if (renderTask.level === 1 || renderTask.level === "1") {
        elementLevel = <span className="label label-info">Medium</span>
    } else {
        elementLevel = <span className="label label-danger">High</span>
    }

    const handleEdit = (task) => {
        onEdit(true, task);
    }

    const handleDelete = (task) => {
        console.log("delete",task);
        onDelete(task);
    }

    return (
        <tr>
            <td className="text-center">{renderTask.taskId}</td>
            <td>
                {renderTask.taskName}
            </td>
            <td className="text-center">
                {elementLevel}
            </td>
            <td>
                <button type="button" className="btn btn-warning"
                    onClick={() => handleEdit(renderTask)}>
                    Edit
                </button>
                <button type="button" className="btn btn-danger"
                    onClick={() => handleDelete(renderTask)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Task