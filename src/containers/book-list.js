import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>{book.title}</li>
      );
    });
  }

  render() {
    console.log(this.props.abc); // 123

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


export default connect(mapStateToProps)(BookList);

// connect contains (func)(component) as a container
// whenever state changes, mapStateToProps rerender new list of state
// whenever state changes, Container rerenders
// Object and state funcs will be assigned to this.props.books