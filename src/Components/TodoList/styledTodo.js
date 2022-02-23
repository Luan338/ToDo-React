import styled from "styled-components";


export const List = styled.li`  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;    
    margin: 4rem;
    list-style: none;
    border: 1px solid rgba(39, 28, 108, .2);
    box-shadow: 0 0 20px 3px #6a6aab;
    border-radius: 10px;
    height: 20rem;
`

export const BoxInitial = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

`
export const Title = styled.h1`
    font-size: 1.2em;
    text-align: center;
    color: #271c6c;
    text-shadow: 0 0 5px #e1ebfd, 3px -1px 5px #e1ebfd;
`

export const Img = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    height: 14rem;
`
export const Paragraph = styled.p`
    margin: 0 auto;
    width: 90%;
    word-wrap: break-word;
    font-size: 1em;
    color: #e1ebfd;
    text-shadow: 0 0 5px #433aa8, 3px -1px 5px #271c6c;
`