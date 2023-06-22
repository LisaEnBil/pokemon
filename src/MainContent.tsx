import './MainContent.css';
import { Header } from "./Header";
import { PokemonList, PokemonListType } from "./PokemonList";
import { useEffect, useState } from 'react';
import { Modal } from './Modal';


export function MainContent(){
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [pokemonList, setPokemonList] = useState<PokemonListType[]>();
  
    useEffect(() => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then((response) => response.json())
        .then((data) => setPokemonList(data.results))
        .catch((error) => console.log(error))
      
    }, [pokemonList]
    );

    if (!pokemonList){
      return <>NOOOO!</>
    }


    const handleClick = (isClicked: boolean) => {
        setIsClicked(isClicked);
      }
    return <div className="main-content">
        <Header /> 
        <PokemonList handleClick={handleClick} />
        {isClicked && <Modal name={"pelle"} handleClick={handleClick} /> }   
    </div>
}
    