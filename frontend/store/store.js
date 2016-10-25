import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import { MasterMiddleware } from '../middleware/master_middleware';

const configureStore = () => (createStore(RootReducer, MasterMiddleware));

export default configureStore;
