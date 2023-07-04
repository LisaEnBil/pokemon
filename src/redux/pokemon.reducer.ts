import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './pokemon.initial-state';
import { fetchPokemonList } from './pokemon.actions';

// export const pokemonReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(fetchPokemonList.fulfilled, (state, { payload }) => {
//             state = payload;
//         })
// });


