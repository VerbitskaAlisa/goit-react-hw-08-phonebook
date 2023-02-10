import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOut } from "redux/auth/operations";
import { fetchContacts, addContact, deleteContact } from "./operations.js"

const extraActions = [addContact, fetchContacts, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
  const handleFullfilled = state => {
    state.isLoading = false;
    state.error = null;
  };

const fetchContactsFulfilledReducer = (state, action) => {
    state.items = action.payload;
  };

const addContactReducer = (state, action) => {
    state.items.push(action.payload);
} 

const deleteContactReducer = (state, action) => {
    const index = state.items.findIndex(contact => contact.id === action.payload.id);
    state.items.splice(index, 1);
}

const logOutReducer = (state) => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
        .addCase(addContact.fulfilled, addContactReducer)
        .addCase(deleteContact.fulfilled, deleteContactReducer)
        .addCase(logOut.fulfilled, logOutReducer)
        .addMatcher(getActions('pending'), handlePending)
        .addMatcher(getActions('rejected'), handleRejected)
        .addMatcher(getActions('fulfilled'), handleFullfilled);
    }    
});

export const contactsReducer = contactsSlice.reducer;