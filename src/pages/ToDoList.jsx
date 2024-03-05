import React from 'react'
import TodoList from '../components/todo/todo-list';
import Header from '../components/Header/Header';
const ToDoListPage = () => {
  return (
    <div className="container">
        <Header/>
    <TodoList />
    </div>
  )
}

export default ToDoListPage