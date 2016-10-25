import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selector';
import { requestTodos } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});


const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
