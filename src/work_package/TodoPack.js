import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { UpdateTodoForm } from "./UpdateTodoForm";

export const TodoPack = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const delAllTodos = () => {
    setTodos([]);
  }; 

  const moveCompleted = () => {
    const completed = todos.filter(todo => todo.completed); 
    setCompletedTodos([...completedTodos, ...completed]);
    setTodos(todos.filter(todo => !todo.completed)); 
  };

  const moveIncomplete = () => {
    const incomplete = todos.filter(todo => !todo.completed); 
    setIncompleteTodos([...incompleteTodos, ...incomplete]); 
    setTodos(todos.filter(todo => todo.completed));
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoPack">
      <h1>Yapılacaklar Listesi</h1>
      <TodoForm addTodo={addTodo} />
      {}
      {todos.map((todo) =>
        todo.isEditing ? (
          <UpdateTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      <button onClick={moveIncomplete}>Yapılan Görevler</button>
     <br/><br/> <button onClick={delAllTodos}>Görevlerin Hepsini Sil</button>

    </div>
  );
};