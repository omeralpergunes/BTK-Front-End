import React, {useState} from 'react'

export const UpdateTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Görevi Değiştir' />
    <button type="submit" className='todo-btn'>Görevi Değiştir</button>
  </form>
  )
}