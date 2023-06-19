import './MainContent.css';
import { Header } from "./Header";
import { PokemonList } from "./PokemonList";


export function MainContent(){

    return <div className="main-content">
        <Header />
        <PokemonList />
    </div>
}


