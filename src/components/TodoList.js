import React from 'react';

/***************import new todo from todoform ***************/
import Todo from './Todo';


const TodoList = props => {


    return(
        <div className='TodoList-container'>
            {props.todoList.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
             <button
                className='Clear-Completed'
                onClick={props.clearCompleted}>Clear Completed</button>

        </div>
    )
}

export default TodoList;