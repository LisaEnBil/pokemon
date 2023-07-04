import { PokemonListType } from "../PokemonList";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon?limit=150' }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonListType, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})
