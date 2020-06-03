import React from 'react';

/***************import new todo from todoform ***************/
import Todo from './Todo';


const TodoList = props => {


    return(
        <div className='TodoList-container'>
            {props.todoList.map(item => (
                <Todo key={item.id} todo={item} />
            ))}

        </div>
    )
}

export default TodoList;