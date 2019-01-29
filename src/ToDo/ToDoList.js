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

  deleteToDo(event) {
    event.preventDefault(); 
    var array = this.state.items;
    var index = array.indexOf(event.target.value);
    array.splice(index);
    this.setState({
      items: array,
    }); 
  }

  renderToDos(){
    return this.state.items.map((item) => {
      return(
      <div key={item}>
         {item} | <button 
         onClick={this.deleteToDo.bind(this)}
         className="btn btn-danger">X</button> 
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
           onChange={this.onChange.bind(this)}
           className="form-control mb-2"
           />
       
          <button 
          onClick={this.addToDo.bind(this)}
          className="btn btn-primary">Add</button> 
        </form>
        <div>
          {this.renderToDos()}
        </div>
      </div>
    )
  }
}

export default ToDoList; 