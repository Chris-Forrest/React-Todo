import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import styled from 'styled-components';

/**********Initial todo list array *****************/
const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: "Moms's Physical Therapy",
    id: 1528817095632,
    completed: false
  }
]
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-conent: center;
  align-items: center;
`

class App extends React.Component {
 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  /********set up state  ******************************/
constructor(){
  super();
  this.state = {
    todoList,
   
  }
  console.log('todolist data from the constructor',todoList);
}

/***********toggle item  ******************/

toggleItem = itemId => {
  console.log('this is the itemId',itemId);
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise, return the item untouched
  this.setState({
    todoList: this.state.todoList.map(item => {
      if(itemId === item.id){
       return {
         ...item,
         completed: !item.completed
       }
      }
      return item;
    })
  })
}

/***********add item  *****************************/
addItem = item => {
  const newItem ={
    task: item,
    id: Date.now(),
    completed: false
  }
  this.setState({
    todoList: [...this.state.todoList, newItem]
  })
}

clearCompleted = e => {
  e.preventDefault()
  this.setState({ 
      todoList: this.state.todoList.filter(item => !item.completed)
  })
}

handleChanges = e => {
  console.log(e.target.value);
  this.setState({ item: e.target.value})
}

onSubmit = e => {
  e.preventDefault()
  this.addItem(this.state.item)
  this.setState({
    item:''
  })
  
}


  render() {
    return (
      <StyledApp className='App-Container'>

        <h2>Welcome to your Todo App!</h2>
       
        <TodoList 
        toggleItem={this.toggleItem}
        todoList={this.state.todoList} 
         />
       
        <TodoForm 
         addItem={this.addItem}
         clearCompleted={this.clearCompleted}
         handleChanges={this.handleChanges}
         onSubmit={this.onSubmit}
          />

      </StyledApp>
    );
  }
}

export default App;
