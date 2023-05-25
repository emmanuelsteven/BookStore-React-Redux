import PropTypes from 'prop-types';

const BookList = ({ bookProps }) => (
  <div>
    <h2>Books</h2>
    <ul>
      {bookProps.map((book) => (
        <li key={book.id}>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.chapter}</div>
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  </div>

);
BookList.propTypes = {
  bookProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      chapter: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BookList;
