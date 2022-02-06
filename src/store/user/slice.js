import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userLogout, userSignUp, userCurrent } from '../../api/user'
import { toast } from 'react-toastify';

const initialState = {
  userData: {
    name: '',
    email: '',
  },
  token: '',
  isLogged: false,
  loading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //-----------------UserSignUp-----------------------------------
    builder.addCase(userSignUp.pending, state => {
      state.loading = true
      state.isLogged = false
    })
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.isLogged = true
      state.loading = false
      state.userData.name = action.payload.user.name
      state.userData.email = action.payload.user.email
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      toast.success('Success')
    })
    builder.addCase(userSignUp.rejected, (state, action) => {
      state.loading = false
      state.isLogged = false
      state.error = action.payload
      toast.error('Incorrect name, email or password')
    })
    //-----------------END UserSignUp-----------------------------------

    //-----------------UserLogin-----------------------------------
    builder.addCase(userLogin.pending, state => {
      state.loading = true
      state.isLogged = false
    })
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLogged = true
      state.loading = false
      state.userData.name = action.payload.user.name
      state.userData.email = action.payload.user.email
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      toast.success('Success')

    })
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false
      state.isLogged = false
      state.error = action.payload
      toast.error('Incorrect name or password')
    })
    //-----------------END UserLogin-----------------------------------

    //-----------------userLogout-----------------------------------
    builder.addCase(userLogout.pending, state => {
      state.loading = true
    })
    builder.addCase(userLogout.fulfilled, state => {
      state.userData = { user: '', email: '', }
      state.isLogged = false
      state.loading = false
      state.token = ''
      localStorage.removeItem('token')
      toast.success('complete')
    })
    builder.addCase(userLogout.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      toast.error('error')
    })
    //-----------------END userLogout-----------------------------------

    //-----------------userCurrent-----------------------------------
    builder.addCase(userCurrent.pending, state => {
      state.loading = true
    })
    builder.addCase(userCurrent.fulfilled, (state, action) => {
      state.isLogged = true
      state.loading = false
      // console.log(action.meta.arg);
      state.token = action.meta.arg
      state.userData.name = action.payload.name
      state.userData.email = action.payload.email
      toast.success('autologin', {
        autoClose: 600,
        hideProgressBar: true,
      })
    })
    builder.addCase(userCurrent.rejected, (state, action) => {
      state.loading = false
      state.isLogged = false
      state.error = action.payload
      toast.error('error autologin', {
        autoClose: 1000,
        hideProgressBar: true,
      })
      // localStorage.removeItem('token')
    })
    //-----------------END userCurrent-----------------------------------

  },
})


export const userReducer = userSlice.reducer