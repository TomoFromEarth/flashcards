import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = action.payload;
    }
  }
});

export const { addCards } = cardsSlice.actions;

export const selectCards = (state) => state.cards.cards;

export default cardsSlice.reducer;
