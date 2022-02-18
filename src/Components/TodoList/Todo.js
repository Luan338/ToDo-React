import React from 'react';
import * as S from './styledTodo';
import lixeira from './Img/lixeira.png';

const Todo = ({text, todo, todos, setTodos}) => {

  const handleDelete = () =>{
    setTodos(todos.filter((element) => element.id !== todo.id ))
  }

  return (
    <>
        <S.List>
          <S.Title>Tarefa</S.Title>
          <S.Box>
            <S.Paragraph>{text}</S.Paragraph>
            <S.Img onClick={handleDelete} src={lixeira} alt="Lixeira" />
          </S.Box>
        </S.List>
    </>
  )
}

export default Todo;