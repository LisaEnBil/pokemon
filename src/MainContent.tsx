import './MainContent.css';
import { Header } from "./Header";
import { PokemonList } from "./PokemonList";
import { useState } from 'react';
import { Modal } from './Modal';


export function MainContent(){
    const [isClicked, setIsClicked] = useState<boolean>(false);


    const handleClick = (isClicked: boolean) => {
        setIsClicked(isClicked);
      }
      console.log(isClicked);
    return <div className="main-content">
        <Header />
        <PokemonList handleClick={handleClick} />
        {
            isClicked &&
            <Modal name={"pelle"} handleClick={handleClick} />    
        }
    </div>
}


