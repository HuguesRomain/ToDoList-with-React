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
    });
  }

  addToDo(event) { 
    event.preventDefault(); 
    this.setState({
      userImputs: '',
      items: [...this.state.items, this.state.userImputs]
    });
};

  deleteTodo(item) {
    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
        items: array
    });
}

renderTodos() {
  return this.state.items.map((item) => {
      return (
          <div className="list-group-item" key={item}>
              {item} | <button onClick={this.deleteTodo.bind(this, item)} className="btn btn-danger">X</button>
          </div>    
      );
  });
}


  render() {
    return(
      <div>
        <h1 align="center">My To Do List</h1>
        <form className='form-row align-items-center'>
          <input 
            value={this.state.userImputs} 
           type='text' 
           placeholder="Write somethings"
           required
           onChange={this.onChange.bind(this)}
           className="form-control mb-2"
           />
       
          <button 
          onClick={this.addToDo.bind(this)}
          className="btn btn-primary">Add</button> 
        </form>
        <div>
          {this.renderTodos()}
        </div>
      </div>
    )
  }
}

export default ToDoList; 