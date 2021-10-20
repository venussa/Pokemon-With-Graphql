import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/PokemonSearch';
import { useParams } from 'react-router';
import { PokeContainer, objectLength, GetTier } from '../function/GroupFunc';
import { NotFound } from '../components/NotFound';

export function PokemonsSearch() {

    const { name } = useParams();

    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, { variables: {first: 1000}, });

    const result = [];

    let pokename, query;

    if (pokemons){
        for (let x = 0; x < objectLength(pokemons); x += 1) {
            pokename = pokemons[x].name.toLowerCase();
            query = name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });

            let tier =  GetTier(pokemons[x].maxCP, pokemons[x].maxHP);

            if (pokename.indexOf(name.toLowerCase()) !== -1 || pokemons[x].types.includes(query) || tier[0].indexOf(query) !== -1) {
                result.push(pokemons[x]);
            }
        }
    }

    return (
        <PokeContainer>
            <div style={{fontWeight: 600, fontFamily: "Arial", paddingLeft: "20px", paddingTop: "10px",paddingBottom: "10px", fontSize: "14px"}}>Search result : {name}</div>
            {result.length > 0 && (result && result.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />))}
            {result.length === 0 && (<NotFound msg="Try using a clearer keyword or the pokemon doesn't exist." />)}
        </PokeContainer>);
}