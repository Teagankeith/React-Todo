import React from 'react';
import ListForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Todo from './components/Todo';



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
      TodoItemList
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
      TodoItemList: this.state.TodoItemList(task => {
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

  render() {
    return (
      <div>
        <h1>Welcome to your Todo List!</h1>
          <ListForm addTodo={this.addTodo}/>
        <div>
          <TodoList TodoItemList={this.state.TodoItemList} toggleTask={this.toggleTask}/>
          <Todo key={this.state.TodoItemList.id} toggleTask={this.toggleTask} TodoItemList={TodoItemList}/>
        </div>
      </div>
    );
  }
}

export default App;
