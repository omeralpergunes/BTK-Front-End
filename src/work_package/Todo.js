import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleComplete(task.id);
  };

  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <div className="checkbox" onClick={handleCheckboxChange}>
        <FontAwesomeIcon
          icon={faCheckSquare}
          className={`checkbox-icon ${isChecked ? 'checked' : ''}`}
        />
         </div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />

        </div>
    </div>
  )
}
