import React,  {Component}  from 'react'; 

class ToDoList extends Component {
  render() {
    return(
      <div>
        <h1>My To Do List</h1>
        <form>
          <input type='text' placeholder="Write somethings"/>
          <button>Add</button> 
        </form>
      </div>
    )
  }
}

export default ToDoList; 