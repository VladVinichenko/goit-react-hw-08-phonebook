import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { addContacts, getContacts, deleteContacts, editContacts } from '../../api/contacts'
import { toast } from 'react-toastify';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: '',
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    filterContacts(state, action) {
      if (action.payload.trim().length > 0) {
        const currentFilter = state.contacts.filter(el => el.name.toLowerCase().includes(action.payload.toLowerCase()))
        if (currentFilter.length > 0) {
          state.filter = currentFilter
          return
        }
        state.filter = { error: 'no results' }
        return
      }
      state.filter = ''
    },
  },
  extraReducers: (builder) => {

    //-----------------addContacts-----------------------------------
    builder.addCase(addContacts.pending, state => {
      state.loading = true
    })
    builder.addCase(addContacts.fulfilled, (state, action) => {
      state.contacts = [...state.contacts, action.payload]
      state.loading = false
      toast.success('Added')
    })
    builder.addCase(addContacts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      toast.error('Error')
    })
    //-----------------END addContacts-----------------------------------

    //-----------------getContacts-----------------------------------
    builder.addCase(getContacts.pending, state => {
      state.loadingUsers = true;
    });
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.loadingUsers = false;
    });
    builder.addCase(getContacts.rejected, (state, action) => {
      state.loadingUsers = false;
      state.error = action.payload;
      toast.error('Error get conact list from server')
    });
    //-----------------END getContacts-----------------------------------

    //-----------------deleteContacts-----------------------------------
    builder.addCase(deleteContacts.pending, state => {
      state.loadingUsers = true;
    });
    builder.addCase(deleteContacts.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.meta.arg)
      state.filter = state.filter.length > 0 && state.filter.filter(el => el.id !== action.meta.arg)
      state.loadingUsers = false;
      toast.success('Deleted')
    });
    builder.addCase(deleteContacts.rejected, (state, action) => {
      state.loadingUsers = false;
      state.error = action.payload;
      toast.error('Error delete')
    });
    //-----------------END deleteContacts-----------------------------------

    //-----------------editContacts-----------------------------------
    builder.addCase(editContacts.pending, state => {
      state.loading = true
    })
    builder.addCase(editContacts.fulfilled, (state, action) => {
      state.contacts = [...state.contacts]
      state.contacts.map(el => {
        if (el.id === action.payload.id) {
          el.name = action.payload.name
          el.number = action.payload.number
        }
      });
      state.loading = false
      toast.success('Complete')
    })
    builder.addCase(editContacts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      toast.error('Error edit')
    })
    //-----------------END editContacts-----------------------------------
  },
})

export const contactReducer = contactSlice.reducer

export const { deleteContact, filterContacts } = contactSlice.actions