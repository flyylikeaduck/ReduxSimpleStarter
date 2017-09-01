import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// any key added to the combineReducers will be added as key to the global application state

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
