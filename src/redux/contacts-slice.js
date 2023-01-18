// Відпрацювання та експорт редюсерів на запис і видаленя контактів
import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        const sortArr = [...store, payload].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return sortArr;
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },

    removeContact: (store, { payload }) =>
      store.filter(item => item.id !== payload),
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
