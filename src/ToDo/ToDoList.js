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

  renderToDos(){
    return this.state.items.map((item) => {
      return(
      <div key={item}>
         {item} | <button>X</button>
      </div>
      );
    });
  }

  addToDo(event) { 
    event.preventDefault(); 
    this.setState({
      userImputs: '',
      items: [...this.state.items, this.state.userImputs]
    }, () => console.log(this.state));
  };

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
       
          <button onClick={this.addToDo.bind(this)}>Add</button> 
        </form>
        <div>
          {this.renderToDos()}
        </div>
      </div>
    )
  }
}

export default ToDoList; 