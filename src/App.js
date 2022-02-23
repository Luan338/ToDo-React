import React, { useState } from 'react';
import './App.css'
import Form from './Components/Forms/Form';
import TodoList from './Components/TodoList/TodoList';


function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputTime, setInputTime] = useState("");

  return (
    <section className='wrapper'>
      <div className='container'>
        <h1>ToDo Luan</h1>
      </div>
      <Form 
      input={input} 
      todos={todos} 
      setTodos={setTodos} 
      setInput={setInput} 
      setInputTime={setInputTime}
      inputTime={inputTime}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </section>
  );
}

export default App;
