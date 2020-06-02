import React from "react"

import "./Todo.css"

const Todo = props => {
    console.log(props)
    return(
        <div 
          className={`task${props.task.completed ? "completed" : ""}`}
          onClick={() => props.toggleTask(props.task.id)}
            >
            <h2>{props.task.task}</h2>
        </div>
        )
    
}


export default Todo