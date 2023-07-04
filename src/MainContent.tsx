import './MainContent.css';
import { Header } from "./Header";
import { Pokemon, PokemonList, PokemonListType } from "./PokemonList";
import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import type { Dispatch } from 'redux';
import { useDispatch } from 'react-redux'
import { initialPokemonState } from './redux/pokemon.initial-state';

export function MainContent(){
    const dispatch: Dispatch = useDispatch();

    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<Pokemon>(initialPokemonState);

    const handleClick = (data: Record<string, any>) => {
        setIsClicked(data.isClicked);
        setPokemon(data.pokemon);
    }
    console.log(isClicked);
    return <div className="main-content">
        <Header /> 
            <PokemonList handleClick={handleClick}/>
            {isClicked && <Modal handleClick={handleClick} pokemon={pokemon}/> }
    </div>
}
    