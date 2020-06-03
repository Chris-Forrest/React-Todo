import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
