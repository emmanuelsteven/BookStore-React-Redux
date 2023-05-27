import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'oxD9wpgPJPrVlblpPp3x';
const Url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const response = await axios.get(Url);
    const newItemz = Object.keys(response.data).map((book) => ({
      item_id: book,
      ...response.data[book][0],
    }));
    return newItemz;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const postBooks = createAsyncThunk('book/postBooks', async (bookData) => {
  try {
    const response = await axios.post(Url, bookData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add books');
  }
});

export const deleteBooks = createAsyncThunk('book/deleteBooks', async (bookId) => {
  try {
    const response = await axios.delete(`${Url}/${bookId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to remove books');
  }
});

const initialState = {
  book: [],
  isLoading: false,

};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },

    removeBook: (state, action) => {
      const bookItem = action.payload;
      return {
        ...state,
        book: state.book.filter((book) => book.item_id !== bookItem),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getBooks.fulfilled, (state, action) => {
        state.book = action.payload;
        state.isLoading = false;
      })

      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
