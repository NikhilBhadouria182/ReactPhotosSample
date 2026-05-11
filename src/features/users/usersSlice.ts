import { createSlice, createEntityAdapter, EntityState } from '@reduxjs/toolkit';

interface User {
  email: string;
  name: string;
}

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.email,
});

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    registerUser: usersAdapter.addOne,
  },
});

export const { registerUser } = usersSlice.actions;

// --- THE TRICK ---
// Instead of 'RootState', we type 'state' as an object that contains our slice
export const {
  selectById: selectUserByEmail,
} = usersAdapter.getSelectors(
  (state: { users: EntityState<User, string> }) => state.users
);

export default usersSlice.reducer;
