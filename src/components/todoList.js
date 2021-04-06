import React from 'react';
import Todo from './todo.js';


const TodoList=(props)=>{
    
    return (
       <div className="todo-container">
           <ul className="todo-list">
                {props.todos.map(todo =>{
                    return (<Todo todo={todo} key={todo.id} todos={props.todos} setTodos={props.setTodos}/>);
                })}
           </ul>
            
       </div>
    );
}
export default TodoList;