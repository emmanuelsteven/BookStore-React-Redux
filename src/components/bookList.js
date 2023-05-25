import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const book = useSelector((state) => state.book.book);
  const dispatch = useDispatch();
  const handleremoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };
  return (
    <div className="imp-book">
      {book.map((book) => (
        <div key={book.item_id} className="book-cont">
          <div>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <button type="button">comments</button>
            <button type="button" onClick={() => handleremoveBook(book.item_id)}>remove</button>
            <button type="button">edit</button>
          </div>
          <div>
            <AiOutlineLoading3Quarters />
            <div>
              <span>64%</span>
              <span>completed</span>
            </div>
          </div>
          <div>
            <p>CURRENT CHAPTER</p>
            <p>
              Chapter
              {book.chapter}
            </p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default BookList;
