// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"

import Todo from "./Todo"

const TodoList = props => {
        return (
        <div className="todo-list-container">
            {
                props.TodoItemList.map(todo => {
                   return <Todo key={todo.id} task={todo} toggleTask={props.toggleTask}/>
                })
            }
        </div>
        )
    
}

export default TodoList