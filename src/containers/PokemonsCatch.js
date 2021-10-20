import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons-detail';
import { Pokemon } from '../components/PokemonCatch';
import { useParams } from 'react-router';
import { PokeContainer } from '../function/GroupFunc';

export function PokemonsCatch() {

    const { id } = useParams();

    const { data: { pokemon } = {}} = useQuery(GET_POKEMONS, { variables: {id : id}, });

    return (<PokeContainer>{pokemon && <Pokemon key={pokemon.id} pokemons={pokemon} />}</PokeContainer>);
}