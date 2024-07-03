
import { createSelector } from '@reduxjs/toolkit';
import { selectContactFilter } from '../filters/selectors';

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, filter) =>
    contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter) || number.toLowerCase().includes(filter)
    )
);
