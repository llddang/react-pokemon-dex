import { Pokemon } from "@/types/pokemon.dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemon[] = [];

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.push(action.payload);
    },
    deletePokemon: (state, action: PayloadAction<number>) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const { addPokemon, deletePokemon } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
