import React from "react"

const Todo = props => {
    return(
        <div 
           // className={`task${props.TodoListItem.completed ? " completed" : ""}`}
          //  onClick={() => props.toggleTask(props.task.id)}
            >
            <h2>{props.task}</h2>
        </div>
        )
    
}


export default Todo