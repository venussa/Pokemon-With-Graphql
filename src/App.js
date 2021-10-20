import React from 'react';
import ApolloClient from 'apollo-boost';
import { Route, HashRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Pokemons, PokemonsDetail, PokemonsCatch, PokemonsMe, PokemonsSearch, Navigation} from "./route";

export default function App() {

  const client = new ApolloClient({uri: "https://graphql-pokemon2.vercel.app"});

  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <main>
          <Navigation />
          <Route exact path="/" component={Pokemons}/> 
          <Route path="/:id" component={PokemonsDetail}/> 
          <Route path="/catch/:id" component={PokemonsCatch}/> 
          <Route path="/my_pokemon" component={PokemonsMe}/> 
          <Route path="/search/:name" component={PokemonsSearch}/> 
        </main> 
      </ApolloProvider>
    </HashRouter>
  );
}
