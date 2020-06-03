import React from 'react';

const TodoForm = props => {

    
  
        
        return (
            <form >
                <label>Todo</label>
                <input
                type='text'
                name='todoInput' 
                value={props.item}
                onChange={props.handleChanges}
                />
                <button 
                className='Add-Todo'
                onClick={props.onSubmit}>Add Todo</button>

                <button
                className='Clear-Completed'
                onClick={props.clearCompleted}>Clear Completed</button>
               
            </form>
        )
    
}

export default TodoForm;