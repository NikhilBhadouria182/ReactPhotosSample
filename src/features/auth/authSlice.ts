import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

interface AuthState {
  users: User[] | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  users: [],
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      const exists = state.users.some(
        users => users.email === action.payload.email
      );

      if (!exists) {
        state.users.push(action.payload);
      }    
    },

    logout: state => {
      state.isLoggedIn = false;
    },

    loginUser: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const user = state.users.find(
        item =>
          item.email === action.payload.email &&
          item.password === action.payload.password
      );
      state.isLoggedIn = !!user;
     }
  },
});

export const { registerUser, logout, loginUser } = authSlice.actions;
//export const { name, email, phoneNumber, password } = authSlice.actions;

export default authSlice.reducer;