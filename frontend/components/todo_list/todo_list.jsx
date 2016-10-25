import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.requestTodos();
  }

  render(){
    const listItems = this.props.todos.map(({title, id}) => (
      <TodoListItem key={id} title={title} />
    ));

    return(
      <div>
      <ul>
        {listItems}
      </ul>
        <TodoForm createTodo={this.props.createTodo} />
      </div>
    );
  }

}

export default TodoList;
