import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({ item: e.target.value})
      }
      
      onSubmit = e => {
        e.preventDefault()
        this.props.addItem(e, this.state.item )
      }

        render(){
        return (
            <form >
                <label>Todo</label>
                <input
                type='text'
                name='todoInput' 
                value={this.state.item}
                onChange={this.handleChanges}
                />
                <button 
                className='Add-Todo'
                onClick={this.onSubmit}>Add Todo</button>
               
            </form>
        )
    }
}

export default TodoForm;