
import { createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts, updateContact } from './operations';

const initialState = {
  items: [],
  loading: false,
};

const setLoading = state => {
  state.error = null;
  state.loading = true;
};

const setError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.pending, setLoading)
      .addCase(fetchContacts.rejected, setError)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.pending, setLoading)
      .addCase(addContact.rejected, setError)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addCase(deleteContact.pending, setLoading)
      .addCase(deleteContact.rejected, setError)
      .addCase(updateContact.pending, state => {
        state.loading = true;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        const indexToUpdate = state.items.findIndex(({ id }) => id === payload.id);
        state.items[indexToUpdate] = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
