import React from 'react';
import { Pokebox, PokeContent, PokeImg, PokeMsg } from '../function/Css404';

export function NotFound({msg}) {
    return (
        <main>
            <Pokebox >

                <PokeContent>
                <PokeMsg style={{marginTop: "0px", fontSize: "20px"}}>Oop's, Pokemon not found.</PokeMsg>
                    <PokeImg style={{width: "200px"}} src={require('../assets/icon/404.png').default} />
                    <PokeMsg style={{marginTop: "0px", lineHeight: "22px"}}>{msg && (msg)}</PokeMsg>
                </PokeContent>
            </Pokebox>
        </main>
    );   
}