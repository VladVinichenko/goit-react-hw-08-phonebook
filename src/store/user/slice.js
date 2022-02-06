import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userLogout, userSignUp, userCurrent } from '../../api/user'

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
    })
    builder.addCase(userSignUp.rejected, (state, action) => {
      state.loading = false
      state.isLogged = false
      state.error = action.payload
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

    })
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false
      state.isLogged = false
      state.error = action.payload
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
    })
    builder.addCase(userLogout.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
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
    })
    builder.addCase(userCurrent.rejected, (state, action) => {
      state.loading = false
      state.isLogged = false
      state.error = action.payload
      // localStorage.removeItem('token')
    })
    //-----------------END userCurrent-----------------------------------

  },
})

export const userReducer = userSlice.reducer