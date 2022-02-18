import React from 'react';
import * as S from './styledTodo';
import lixeira from './Img/lixeira.png';

const Todo = ({text}) => {
  return (
    <>
        <S.List>
            <S.Paragraph>{text}</S.Paragraph>
            <S.Img src={lixeira} alt="Lixeira" />
        </S.List>
    </>
  )
}

export default Todo;