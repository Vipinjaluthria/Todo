import React, { useState } from 'react';
import './App.css';
import Form from './components/form.js';
import TodoList from './components/todoList.js';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  return (
    <div className="main">
      <header> <h1>Vipin's todo list</h1></header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoList setTodos={setTodos} inputText={inputText} todos={todos}/>
    </div>
  );
}

export default App;
