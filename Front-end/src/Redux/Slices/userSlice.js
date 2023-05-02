import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  name: "",
  email: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      const { userId, name, email, accessToken } = action.payload;
      state.userId = userId !== undefined ? userId : state.userId;
      state.name = name !== undefined ? name : state.name;
      state.email = email !== undefined ? email : state.email;
      state.accessToken = accessToken !== undefined ? accessToken : state.accessToken;
    },
    resetDetails:(state,action) => {
      state.userId = ""
      state.name = ""
      state.email = ""
      state.accessToken = ""
    }
  },
});

export const { setDetails,resetDetails } = userSlice.actions; 
export default userSlice.reducer;
export const userReducer = (state) => state.persistedReducer.userReducer;
