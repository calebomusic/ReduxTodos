import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      body: '',
      title: '',
      done: false
    };
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  checkState(){
    return (event => this.setState({['done']: event.target.checked }));
  }

  render(){
    return(
      <div>
          <label>Title</label>
          <input name="Title" onChange={this.linkState('title')} value={this.state.title}/>
          <label>Body</label>
          <input name="Body" onChange={this.linkState('body')} value={this.state.body}/>
          <label>Done?</label>
          <input type='checkbox' onChange={this.checkState()} />
          <button onClick={() => this.props.createTodo(this.state)}>Submit</button>
    </div>
  );
  }
}

export default TodoForm;

// <form>
// <input type="radio" name="Done" onChange={this.linkState('done')} value={true}/>
// <input type="radio" name="Not Done" onChange={this.linkState('done')} value={false}/>
// </form>
