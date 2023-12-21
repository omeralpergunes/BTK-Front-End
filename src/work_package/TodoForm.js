import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const submitValue = (e) => {
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          setValue('');
        }
      };
  return (
    <form onSubmit={submitValue} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Bugün ne yapacağım?' />
    <button type="submit" className='todo-btn'>Görev Ekle</button>
  </form>
  )
}