import React from 'react';
import * as S from './styles';

const Form = ({setInput, todos, setTodos, input, setInputTime, inputTime }) => {

    const textInput = ({target}) =>{
        setInput(target.value);
    }

    const dataTime = ({target}) =>{
        setInputTime(target.value);
    }


    const submit = (e) => {
        e.preventDefault();

        if(input.length && inputTime.length){
        setTodos([
            ...todos,
            {text: input, id:Math.floor(Math.random() * (2000 - 999)), dataTime: inputTime}
        ]);
        setInput("")
    }else{
        alert("Informe uma tarefa com a data e horário!");
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
        <S.Input 
        type="datetime-local"
        onChange={dataTime}
        >
        </S.Input>
        <S.Button onClick={submit}>+</S.Button>
    </S.Form>
  )
}

export default Form;