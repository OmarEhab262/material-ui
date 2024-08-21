import { createSlice } from "@reduxjs/toolkit";

// Safely retrieve user data from localStorage
const storedUser = localStorage.getItem("user");
const nn = storedUser ? JSON.parse(storedUser) : {}; // Fallback to an empty object if user is null
console.log("card: ", nn.card);

const initialState = {
  user: nn, // Use the parsed user object or empty object if not present
  isLoggedIn: !!storedUser, // Check if the user exists in localStorage
  value: nn.card ? nn.card.length : 0, // Initialize the value based on card length
  card: nn.card || [], // Fallback to an empty array if card doesn't exist
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.card.push(action.payload); // Ensure you push action.payload, not the entire action
      state.value = state.card.length; // Update the value based on the card array length
    },

    deleteCard: (state, action) => {
      const idToRemove = action.payload;
      console.log("idToRemove: ", idToRemove);
      state.card = state.card.filter((item) => item.id !== idToRemove);
      state.value = state.card.length; // Update the value based on the updated card array length
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteCard, addCard } = userSlice.actions;

export default userSlice.reducer;
