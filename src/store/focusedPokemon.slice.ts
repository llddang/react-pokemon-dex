import { POKEMON_DATA } from "@/mocks";
import { Pokemon } from "@/types/pokemon.dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Pokemon = POKEMON_DATA[0];

const focusedPokemonSlice = createSlice({
  name: "focusedPokemon",
  initialState,
  reducers: {
    updatePokemon: (_state, action: PayloadAction<Pokemon>) => action.payload,
  },
});

export const { updatePokemon } = focusedPokemonSlice.actions;
export default focusedPokemonSlice.reducer;
