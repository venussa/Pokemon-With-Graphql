import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';
import { PokeContainer, ArrayShuffle } from '../function/GroupFunc';

export function Pokemons() {

    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, { variables: {first: 1000}, });

    let position = [];
    
    if (pokemons) for (let x = 0; x < pokemons.length; x += 1) position.push(x);

    ArrayShuffle(position);

    const result = [];

    for (let x = 0; x < pokemons.length; x += 1) result.push(pokemons[position[x]]);

    return (
        <PokeContainer>{result && result.slice(0,30).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}</PokeContainer>);
}