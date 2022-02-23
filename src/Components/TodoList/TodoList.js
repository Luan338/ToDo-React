import React from 'react';
import Todo from './Todo';
import '../../App.css';

const TodoList = ({todos, setTodos}) => {

  return (
        <ul className='boxList'>
          {todos.map((todo) =>(
             <Todo 
             key={todo.id} 
             text={todo.text}
             setTodos={setTodos}
             todos={todos}
             todo={todo}
             inputTime={todo.dataTime}
             />
          ))}
        </ul>
  )
}

export default TodoList;