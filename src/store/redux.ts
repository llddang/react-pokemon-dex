import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import pokemonsReducer from "@/store/pokemons.slice";
import focusedPokemonReducer from "@/store/focusedPokemon.slice";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["pokemons", "focusedPokemon"],
};

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  focusedPokemon: focusedPokemonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
