import React from 'react';
import { Pokemon } from '../components/PokemonMe';
import { NotFound } from '../components/NotFound';
import { PokeContainer, GetData, objectLength, IsNull } from '../function/GroupFunc';

export function PokemonsMe() {

    let source = GetData("pokemon", true);
    const data = (!IsNull(source) && (source.reverse()));
    const count = objectLength(data);

    return (
        <PokeContainer>
            {count > 0 && data && ( data.map(pokemon => <Pokemon key={pokemon.customid} pokemon={pokemon} />))}
            {count === 0 && (<NotFound msg="Sorry, you currently don't have Pokemon. Let's find your best pokemon soon." />)}
        </PokeContainer>);
}