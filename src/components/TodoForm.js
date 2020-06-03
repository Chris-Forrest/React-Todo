import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
display:flex;
justify-content: space-around;
border:1px solid rgb(210, 210, 210 );
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color:#8deb96;
width: 50%;
`

const TodoForm = props => {

    
  
        
        return (
            <StyledForm >
                <label>New Todo</label>
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
               
            </StyledForm>
        )
    
}

export default TodoForm;