import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          className='list-group-item'
          onClick={() => this.props.selectBook(book)}>
            {book.title}
          </li>
      );
    });
  }

  render() {
    // console.log(this.props.abc); // 123

    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  
  return {
    abc: '123',
    books: state.books
  }
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selecBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method,
// selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// connect contains (func)(component) as a container
// whenever state changes, mapStateToProps rerender new list of state
// whenever state changes, Container rerenders
// Object and state funcs will be assigned to this.props.books