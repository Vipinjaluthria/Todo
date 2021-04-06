import React from 'react';

function Form(props){
    const inputTextHandler=(e)=>{
        props.setInputText(e.target.value);
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        props.setTodos([
            ...props.todos,{text:props.inputText ,completed: false ,id: Math.random()*1000 }
        ]);
        props.setInputText("");
    }
    return (
        <form className="form">
            <input value={props.inputText} onChange={inputTextHandler} type="text" />
            <button className="todo-button"  onClick={submitTodoHandler}>+</button>
            <div className="select"></div>
            <select name="todo" className="filter-todo">
                <option value="all">All</option>
                <option value="all">Complelted</option>
                <option value="all">Uncompleted</option>

            </select>
        </form>
    );
}
export default Form;