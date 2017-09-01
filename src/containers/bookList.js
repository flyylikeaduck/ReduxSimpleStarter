import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Container is a normal React component that gets bonded to the application state

class BookList extends Component {
  renderList() {
    return this.props.books.map((book, i) => {
      return(
        <li
          key={i}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

// KEY: everytime the application state changes, the container/BookList will re-render and update the props
function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

//KEY: anything returned from this func will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //KEY: whenever selectBook is called, the result will be passed to all reducers within the application via dispatch
  return bindActionCreators({ selectBook: selectBook  }, dispatch)
}


// Promote BookList from a component to a container
  // needs to know about dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)