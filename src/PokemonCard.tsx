import './PokemonCardInfo.css'
import { PokemonCardInfo } from "./PokemonCardInfo";

export function PokemonCard(props: {url: any}){
    return <div className="card">
        <PokemonCardInfo url={props.url} /> 
    </div>
    
}