import React from 'react';
import * as S from './styles';

const Form = ({setInput, todos, setTodos, input}) => {

    const textInput = ({target}) =>{
        console.log(target.value)
        setInput(target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: input, id:Math.random() * 9999}
        ]);
        setInput("")
    };

  return (
    <S.Form>
        <S.Input 
        value={input}
        type="text" 
        name="text"
        onChange={textInput}
        />
        <S.Button onClick={submit}>+</S.Button>
    </S.Form>
  )
}

export default Form;