import todosReducer from './reducers/todos';
import { configureStore } from '@reduxjs/toolkit';
export default configureStore({
  reducer:{
    todos:todosReducer
  }
})