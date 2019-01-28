import React,  {Component}  from 'react'; 

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      userImputs: '',
      items: [],
    }; 
  }
  onChange(event){
    this.setState({
      userImputs: event.target.value,
    }, () => console.log(this.state.userImputs));
  }

  render() {
    return(
      <div>
        <h1>My To Do List</h1>
        <form>
          <input 
          value={this.state.userImputs} 
          type='text' 
          placeholder="Write somethings"
          onChange={this.onChange.bind(this)}
          />
       
          <button>Add</button> 
        </form>
      </div>
    )
  }
}

export default ToDoList; 