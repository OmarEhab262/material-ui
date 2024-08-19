import { createSlice } from "@reduxjs/toolkit";
const nn = JSON.parse(localStorage.getItem("user"));
console.log("card: ", nn.card);
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  isLoggedIn: !!localStorage.getItem("user"),
  value: 0,
  card: nn.card || 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.card.push(action);
      state.value = state.value + 1;
    },

    deleteCard: (state, action) => {
      const idToRemove = action.payload;
      console.log("idToRemove: ", idToRemove);
      state.card = state.card.filter((item) => item.id !== idToRemove);
      state.value = state.value - 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteCard, addCard } = userSlice.actions;

export default userSlice.reducer;
