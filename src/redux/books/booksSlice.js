import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: [],
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const nextBook = action.payload;
      state.book = [...state.book, nextBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.book = state.book.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
