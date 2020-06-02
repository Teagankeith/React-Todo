import React from 'react';
import ListForm from "./components/TodoForm"
import TodoList from "./components/TodoList"




let TodoItemList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      TodoItemList: TodoItemList
    };
  }



  addTodo = task => {
    const newTask = {
      task: task,
      completed: false,
      id: Date.now()
    };

    this.setState({
      TodoItemList: [...this.state.TodoItemList, newTask]
    });
  };
  

  toggleTask = id => {
    this.setState({
      TodoItemList: this.state.TodoItemList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    })
  }


  clearCompleted = event => {
    event.preventDefault();

    this.setState({
      TodoItemList: this.state.TodoItemList.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to your Todo List!</h1>
          <ListForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        <div>
          <TodoList TodoItemList={this.state.TodoItemList} toggleTask={this.toggleTask}/>
        </div>
      </div>
    );
  }
}

export default App;
