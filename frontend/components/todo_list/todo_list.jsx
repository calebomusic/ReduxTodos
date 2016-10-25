import React from 'react';
import TodoListItem from './todo_list_item';

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
      <ul>
        {listItems}
      </ul>
    );
  }

}

export default TodoList;
