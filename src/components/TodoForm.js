import React from 'react';

class TodoForm extends React.Component {

    render(){
        return (
            <div>
                <label>Todo</label>
                <input
                type='text'
                name='todoInput' 
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;