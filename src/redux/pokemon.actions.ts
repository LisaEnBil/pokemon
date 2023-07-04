import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonApi } from './pokemon.api';

export const fetchPokemonList = createAsyncThunk(
    "FETCH_POKEMON_LIST",
    () => pokemonApi
);