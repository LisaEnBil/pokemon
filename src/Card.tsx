import './Card.css'
import { useEffect, useState } from "react";
import { Pokemon } from "./PokemonList";
import { useDispatch } from 'react-redux';

export function Card(props: {url: any, handleClick: (data: DataType) => void}){
    const url = props.url;
    const dispatch = useDispatch();

    const [pokemon, setPokemon] = useState<Pokemon>();
    
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.log(error));
    }, [url, pokemon]);
    
    if (!pokemon){
      return <></>
    }
    
    const data: DataType = {isClicked: true, pokemon: pokemon}

    const clickHandler = () => {
      props.handleClick(data);
      
    }

     return <div key={pokemon.id} className="pokemon-card" onClick={clickHandler}>
         <img src={pokemon.sprites.front_default} alt="pokemon">
        </img>
        <p>
            {pokemon.name}
        </p>
    </div> 
}



export type DataType = {
  isClicked: boolean;
  pokemon: Pokemon;
}