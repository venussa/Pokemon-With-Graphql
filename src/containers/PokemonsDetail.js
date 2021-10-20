import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons-detail';
import { Pokemon } from '../components/PokemonDetail';
import { useParams } from 'react-router';
import { PokeContainer } from '../function/GroupFunc';

export function PokemonsDetail() {

    const { id } = useParams();

    const { data: { pokemon } = {}} = useQuery(GET_POKEMONS, {variables: {id : id}, });

    return (<PokeContainer>{pokemon && pokemon.id && <Pokemon key={pokemon.id} pokemons={pokemon} />}</PokeContainer>);
}