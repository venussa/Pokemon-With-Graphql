import React from 'react';
import { GetData, SaveData, GetTier } from '../function/GroupFunc';
import { PokeHp, PokeImg, PokeName, PokePower, PokeSpan, PokeType, Pokebox, PokeRemoveContainer, PokeRemove, PokeMain } from '../function/CssPokeMe';
import styled from '@emotion/styled';
import { useHistory } from 'react-router';
import $ from 'jquery';

export function Pokemon({ pokemon }) {

    let [tier, background, color] = GetTier(pokemon.maxCP, pokemon.maxHP);

    const GoTo = useHistory();

    const PokeTier = styled.span`
        font-size: 8px;
        border-left: 1px #ddd solid;
        border-bottom: 1px #ddd solid;
        padding: 3px 15px 3px 15px;
        position: absolute;
        top: 0px;
        right: 0px;
        border-radius: 0 10px 0 10px;
        box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
        background: ${background};
        color: ${color};
    `;

    const removePoke = (() => {

        if (window.confirm(`Are you sure want to release ${pokemon.newname}`))
        {
            setTimeout(() => {

                let data = GetData("pokemon", true);

                let result = [];

                // eslint-disable-next-line
                data.map((x) => (x.customid !== pokemon.customid && result.push(x)));

                SaveData("pokemon", result, true);

                $(`#${pokemon && (pokemon.customid)}`).animate({
                    "margin-top": "-100px",
                });

                if (result.length === 0) GoTo.push("/");

            }, 500);
        }
    });
    
    return (
        <main style={{overflow: "hidden", marginTop: "-10px"}}>
            <PokeMain id={pokemon.customid}>
                <Pokebox to={`/${pokemon.id}`}>
                    <PokeImg src={pokemon.image} />
                    <PokeName>
                        {pokemon.newname} 
                        {
                            pokemon.types.map(x => (
                                <PokeType title={`Element : ${x}`} src={require(`../assets/icon/${x.toString().toLowerCase()}.png`).default} /> 
                            ))
                        }
                        </PokeName>
                        <PokeTier>{tier}</PokeTier>
                    <PokePower>
                        <PokeSpan title="HP Point">
                            <PokeHp src={require(`../assets/icon/heart.png`).default} />{pokemon.maxHP.toLocaleString()}
                        </PokeSpan>
                        <PokeSpan title="Combat Power">
                            <PokeHp src={require(`../assets/icon/swords.png`).default} />{pokemon.maxCP.toLocaleString()}
                        </PokeSpan>
                    </PokePower>
                </Pokebox>
                <PokeRemoveContainer onClick={removePoke}>
                    <PokeRemove src={require(`../assets/icon/remove.png`).default} />
                    <span>Release</span>
                </PokeRemoveContainer>
            </PokeMain>
        </main>
    )
}