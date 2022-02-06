import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


export const getContacts = createAsyncThunk('/contacts/get', async (_, thunkAPI) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return await axios.get('/contacts')
    .then(function (response) {
      if (response.status === 200) {
        return thunkAPI.fulfillWithValue(response.data)
      }
      return thunkAPI.fulfillWithValue([])
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.statusText)
    });
}
)



export const addContacts = createAsyncThunk('/contacts/add', async (payload, thunkAPI) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return await axios.post('/contacts', payload)
    .then(function (response) {
      if (response.status === 201) {
        return thunkAPI.fulfillWithValue(response.data)
      }
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.statusText)
    });
}
)



export const deleteContacts = createAsyncThunk('/contacts/delete', async (payload, thunkAPI) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return await axios.delete(`/contacts/${payload}`)
    .then(function (response) {
      if (response.status === 200) {
        return thunkAPI.fulfillWithValue(response.data)
      }
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.statusText)
    });
}
)

export const editContacts = createAsyncThunk('/contacts/edit', async (payload, thunkAPI) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return await axios.patch(`/contacts/${payload.id}`, payload.data)
    .then(function (response) {
      if (response.status === 200) {
        return thunkAPI.fulfillWithValue(response.data)
      }
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.statusText)
    });
}
)