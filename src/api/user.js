import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';




export const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = ``;
  },
};



export const userSignUp = createAsyncThunk('user/signup', async (payload, thunkAPI) => {
  return await axios.post('/users/signup', payload)
    .then(function (response) {
      if (response.status === 200) {
        token.set(response.data.token);
        return thunkAPI.fulfillWithValue(response.data)
      }
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.statusText)
    });
}
)


//   //   "email": "sodawe8763@chinamkm.com",
//   //   "password": "maymaymay"




export const userLogin = createAsyncThunk('user/login', async (payload, thunkAPI) => {
  return await axios.post('/users/login', payload)
    .then(function (response) {
      // console.log('data:', response.data);
      // console.log('status:', response.status);
      // console.log('statusText:', response.statusText);
      // console.log('headers:', response.headers);
      // console.log('config:', response.config);
      if (response.status === 200) {
        token.set(response.data.token);
        return thunkAPI.fulfillWithValue(response.data)
      }
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.statusText)
    });
})




export const userLogout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  return await axios.post('/users/logout')
    .then(function (response) {
      if (response.status === 200) {
        token.unset();
        return thunkAPI.fulfillWithValue(response.data)
      }
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.statusText)
    });
}
)

// export const userCurrent = async () => {
//   try {
//     const response = await axios.get('/users/current')
//     console.log(response);
//     if (response.data) {
//       console.log(response.data);
//       return response.data;
//     }
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// };


export const userCurrent = createAsyncThunk('user/current', async (payload, thunkAPI) => {
  payload && token.set(payload);
  return await axios.get('/users/current')
    .then(function (response) {
      // console.log('data:', response.data);
      // console.log('status:', response.status);
      // console.log('statusText:', response.statusText);
      // console.log('headers:', response.headers);
      // console.log('config:', response.config);
      if (response.status === 200) {
        // token.set(response.data.token);
        return thunkAPI.fulfillWithValue(response.data)
      }
    })
    .catch(function (error) {
      return thunkAPI.rejectWithValue(error.response.statusText)
    });
}
)
