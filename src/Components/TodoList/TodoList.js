import React from 'react';
import Todo from './Todo';
import '../../App.css';

const TodoList = ({todos}) => {
  console.log(todos)
  return (
        <ul className='boxList'>
          {todos.map((todo) =>(
             <Todo text={todo.text}/>
          ))}
        </ul>
  )
}

export default TodoList