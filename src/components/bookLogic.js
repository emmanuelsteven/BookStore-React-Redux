import React, { useState } from 'react';
import Booklist from './bookList';

const Bookslogic = () => {
  const [book] = useState([
    {
      id: 1,
      title: 'The god must be crazy',
      author: 'Ola Rotimi',
      chapter: 17,
    },
    {
      id: 2,
      title: 'The African Child',
      author: 'Fedinard ononus',
      chapter: 50,
    },
    {
      id: 3,
      title: 'shege pro-max from microverse',
      author: 'Steven Emmanuel',
      chapter: 3,
    },
  ]);

  return (
    <div>
      <Booklist bookProps={book} />
    </div>
  );
};

export default Bookslogic;
