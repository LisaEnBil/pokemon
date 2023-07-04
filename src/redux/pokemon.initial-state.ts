import { Pokemon, PokemonListType } from "../PokemonList";


export const initialState: PokemonListType =  {
   name: "",
   url: ""
};



export const initialPokemonState: Pokemon = {
   abilities: [],
   base_experience: 0,
   forms: [],
   game_indices: [],
   height: 0,
   held_items: [],
   id: 0,
   is_default: false,
   location_area_encounters: "",
   moves: [],
   name: "",
   order: 0,
   past_types: [],
   species: { name: "", url: "" },
   sprites: {
     back_default: "",
     back_female: null,
     back_shiny: "",
     back_shiny_female: null,
     front_default: "",
     front_female: null,
     front_shiny: "",
     front_shiny_female: null,
     other: undefined,
     versions: undefined
   },
   stats: [],
   types: [],
   weight: 0
 };
 