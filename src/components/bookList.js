import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { useEffect } from 'react';
import {
  getBooks, removeBook, deleteBooks,
} from '../redux/books/booksSlice';

const BookList = () => {
  const { book, isLoading } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const handleremoveBook = (itemId) => {
    dispatch(removeBook(itemId));
    dispatch(deleteBooks(itemId));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="imp-book">
      {book.map((key) => (
        <div key={key.item_id} className="book-cont">
          <div>
            <h4>{key.title}</h4>
            <p>{key.author}</p>
            <button type="button">comments</button>
            <button type="button" onClick={() => handleremoveBook(key.item_id)}>remove</button>
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

    </div>
  );
};
export default BookList;
