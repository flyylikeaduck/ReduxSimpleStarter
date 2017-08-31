import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';

// the reducer adds keys to global application states
const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer
});

export default rootReducer;
