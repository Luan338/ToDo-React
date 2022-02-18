import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 340px) {
    flex-direction: column;
}

`

export const Input = styled.input`
    background: #e1ebfd;
    border: none;
    width: 15rem;
    border-radius: 5px;
    padding: .6rem;
    outline: none;
    margin-right: 1rem;
    @media(max-width: 340px){
        margin-right: 0rem;
    }
    @media(max-width: 273px){
        width: 100%;
    }
`

export const Button = styled.button`
    background: #271c6c;
    border: none;
    width: 5rem;
    border-radius: 5px;
    padding: .6rem;
    outline: none;
    color: white;
    cursor: pointer;
    transition: .5s all;
    &:hover{
        color: #e1ebfd;
        background: #6a6aab;
    }
    @media(max-width: 340px){
        margin-top: 1rem;
    }
`