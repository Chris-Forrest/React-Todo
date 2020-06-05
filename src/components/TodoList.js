import React from 'react';
import styled from 'styled-components';

/***************import new todo from todoform ***************/
import Todo from './Todo';


const StyledList = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border:1px solid rgb(210, 210, 210 );
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color:white;
width: 50%;

`

const TodoList = props => {

console.log('props from todolist component',props)
    return(
        <StyledList className='TodoList-container'>
            {props.todoList.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
        </StyledList>
    )
}

export default TodoList;