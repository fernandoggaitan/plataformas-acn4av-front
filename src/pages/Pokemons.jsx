import Button from 'react-bootstrap/Button';

import { useState, useEffect } from "react"

export default function Pokemons(){

    const [lista, setLista] = useState( [] );
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [previous, setPrevious] = useState(null);
    const [next, setNext] = useState(null);

    useEffect( () => {
        getLista();
    }, [url]);

    const getLista = async() => {
        try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setLista(json.results);
            setPrevious(json.previous);
            setNext(json.next);
        }catch(error){
            console.log(error);
        }
    }

    const getId = (apiUrl) => {
        const match = apiUrl.match(/\/(\d+)\/?$/);
        if (!match) return null;
        const id = match[1];
        return id;
    }

    const getShinyImageUrl = (apiUrl) => {
        const id = getId(apiUrl);
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
    }

    return (
        <>
            <h1> Pokemones </h1>
            <p> {url} </p>
            <Button onClick={ () => setUrl(previous) } disabled={!previous} variant='primary'> Página anterior </Button>
            <Button onClick={ () => setUrl(next) } disabled={!next} variant='primary'> Página siguiente </Button>
            <ul>
                {
                    lista.map( p => (
                        <li key={p.name}>
                            <img src={getShinyImageUrl(p.url)} alt={p.name} />
                            {p.name}
                        </li>
                    ))
                }
            </ul>
        </>
    )

}