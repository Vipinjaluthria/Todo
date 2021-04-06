import React, { useState,useEffect } from 'react';
import './App.css';
import Form from './components/form.js';
import TodoList from './components/todoList.js';

function App() {

  //status stuff
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);
  useEffect(() => {
    getlocal()
  }, [])
  useEffect(()=>{
    filterHandler();
    savetolocal()
  },[todos,status])



  //filter handler
  const filterHandler=()=>{
    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case  'Uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))

        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const savetolocal=()=>{
    if(localStorage.getItem("todos")===null)
    {
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{

      localStorage.setItem('todos',JSON.stringify(todos));
    }
  }
  const getlocal=()=>{
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let v=JSON.parse(localStorage.getItem("todos"));
      setTodos(v);
    }
  }
  return (
    <div className="main">
      <header> <h1>Vipin's todo list</h1></header>
      <Form todos={todos} setTodos={setTodos} 
      setInputText={setInputText} inputText={inputText} 
      status={status} setStatus={setStatus} />
      <TodoList setTodos={setTodos} inputText={inputText} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
