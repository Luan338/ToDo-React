import React from 'react';
import * as S from './styles';

const Form = ({setInput, todos, setTodos, input}) => {

    const textInput = ({target}) =>{
        setInput(target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        if(input.length){
        setTodos([
            ...todos,
            {text: input, id:Math.floor(Math.random() * (2000 - 999))}
        ]);
        setInput("")
    }else{
        alert("Informe uma tarefa !");
    }
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