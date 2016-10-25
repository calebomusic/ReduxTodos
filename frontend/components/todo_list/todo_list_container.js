import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selector';
import { requestTodos, createTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});


const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
