import React, { useReducer, useState } from "react";
import "./todo-list.css";
import TodoAdd from "./todo-add";
import TodoFilter from "./todo-filter";
import TodoItem from "./todo-item";
import list from "./data";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { TodoReducer } from "./todo-reducer";

const TodoList = () => {
  const [tasks2, dispatch] = useReducer(TodoReducer, []);
  console.log(tasks2);



  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || list);

    dispatch({
      type: "create",
    });
    
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filterMap = {
    All: () => true,
    "Done": (task) => task.done,
    ToDo: (task) => !task.done,
  };

  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        title,
        done: false,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const updateTask = (id, title) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 >TODO LIST</h1>

      <div className="todo-list">
        <TodoAdd addTask={addTask} />

        <TodoFilter
          setFilter={setFilter}
          filterMap={filterMap}
          activeFilter={filter}
        />

        <div className="TodoTasksList">
          {tasks.filter(filterMap[filter]).map((task) => (
            <TodoItem
              {...task}
              removeTask={removeTask}
              toggleDone={toggleDone}
              updateTask={updateTask}
              key={task.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
