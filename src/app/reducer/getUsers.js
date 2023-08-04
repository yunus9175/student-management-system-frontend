// userProfileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "getUsers",
  initialState: {
    allUsers: [],
  },
  reducers: {
    fetchAllUsers(state, action) {
      state.allUsers = action.payload.allUsers;
    },
  },
});

export const { fetchAllUsers } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
