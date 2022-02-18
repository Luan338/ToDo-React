import styled from "styled-components";


export const List = styled.li`  
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    border: 2px solid #271c6c;
    box-shadow: 0 0 0 3px #6a6aab;
    border-radius: 10px;
    width: 20rem;
    height: 10rem;
    @media(max-width: 360px){
    width: 100%;
    }
`

export const Img = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const Paragraph = styled.p`
    font-size: 1.2rem;
    color: #e1ebfd;
    text-shadow: 0 0 5px #433aa8, 3px -1px 5px #271c6c;
`
