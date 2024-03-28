import React, { useReducer, useState } from "react";
import "./todo-list.css";
import TodoAdd from "./todo-add";
import TodoFilter from "./todo-filter";
import TodoItem from "./todo-item";
import list from "./data";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { TodoReducer } from "./todo-reducer";

// Old Code 
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios';
import { fetchPosts } from '../../redux/slices/posts';

const TodoList = () => {

  const dispatchs = useDispatch();
  const { posts } = useSelector(state => state.posts);

  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
      dispatchs(fetchPosts())
  }, []);


  const [tasks2, dispatch] = useReducer(TodoReducer, []);
  console.log(tasks2);



  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ brand: "All", priceRange: { min: 0, max: 800000 }, searchTerm: "" });

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

  // Извлечь все значения моделей автомобилей из постов
  const carModels = posts.items.map(post => post.brand).filter(Boolean);
  
  // Найти уникальные значения моделей автомобилей
  const uniqueCarModels = [...new Set(carModels)];

  const filteredPosts = posts.items ? posts.items.filter(post => {
    const brandFilter = filter.brand === "All" || post.brand === filter.brand;
    const priceFilter = post.price >= filter.priceRange.min && post.price <= filter.priceRange.max;
    const searchFilter = post.model && post.model.toLowerCase().includes(filter.searchTerm.toLowerCase());
    return brandFilter && priceFilter && searchFilter;
  }) : [];

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
          activeFilter={filter}
          carModels={uniqueCarModels}
        />

        <div className="TodoTasksList">
        {(isPostsLoading ? [...Array(5)] : filteredPosts).map((post, index) => (
            <TodoItem
              {...post}
              removeTask={removeTask}
              toggleDone={toggleDone}
              updateTask={updateTask}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
