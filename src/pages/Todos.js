import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import "../styles/Todo.css";
import Todo from "../components/Todo";

const syncToDB = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};
const readFromDB = () => {
  const itemsJson = localStorage.getItem("items");
  if (itemsJson) {
    return JSON.parse(itemsJson);
  } else {
    return [];
  }
};

const Todos = () => {
  const [todos, setTodos] = useState(readFromDB());
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    syncToDB(todos);
  }, [todos]);

  const addTask = () => {
    if (todos.some((item) => item.text === newTodoText.trim())) {
      alert("Task already exists!!!");
      return;
    }
    if (newTodoText.trim("") === "") {
      alert("Task cannot be empty!!!");
      return;
    }

    const maxUniqueId = Math.max(0, ...todos.map((item) => item.id)) + 1;
    const newTodoList = [
      ...todos,
      {
        id: maxUniqueId,
        text: newTodoText,
        completed: false,
      },
    ];
    setTodos(newTodoList);
  };

  const deleteTask = (toDeleteTask) => {
    const newTodoList = todos.filter((task) => task.id !== toDeleteTask.id);
    setTodos(newTodoList);
  };
  const markTaskCompleted = (task) => {
    const newTodos = [...todos];
    const taskIndex = todos.findIndex((todo) => todo.id === task.id);
    newTodos[taskIndex] = {
      ...task,
      completed: !task.completed,
    };
    setTodos(newTodos);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  return (
    <div className="todo-container">
      <Navbar />
      <div className="todo">
        <div className="todo-text">add your daily tasks</div>
        <div className="add-task">
          <input
            type="text"
            placeholder="my task"
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={addTask}>
            <span>Add</span>
          </button>
        </div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              markTaskCompleted={markTaskCompleted}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
