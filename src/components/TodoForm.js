import React from "react"


class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }


    handleSubmit = event =>{
        event.preventDefault()
        this.props.addTodo(this.state.task)
        this.setState({
            task: ""
        })  
    }

    changeHandler = e => {
        this.setState({
            task: e.target.value
        })
    
    }
    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>Start a Todo:&nbsp;</label>
            <input 
            type= "text"
            name="task"
            placeholder="Enter a todo"
            onChange= {this.changeHandler}
            value= {this.state.task}
            />

            <button className="submit">Add</button>
            
            <button className="clear" onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default ListForm