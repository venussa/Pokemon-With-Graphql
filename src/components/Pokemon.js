import React from 'react';
import { GetTotalOwned, GetTier} from '../function/GroupFunc';
import { PokeHp, PokeImg, PokeName, PokePower, PokeSkill, PokeSkillBox, PokeSpan, PokeType, Pokebox } from '../function/CssPoke';
import styled from '@emotion/styled';

export function Pokemon({ pokemon }) {

    const TotalOwned = GetTotalOwned(pokemon.id);

    let [tier, background, color] = GetTier(pokemon.maxCP, pokemon.maxHP);

    const PokeTier = styled.span`
        font-size: 8px;
        font-weight: 600;
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
    
    return (
        <Pokebox to={`/${pokemon.id}`} style={{borderLeft: `${TotalOwned > 0 && (`3px ${background} solid`)}`}}>
            <PokeImg src={pokemon.image} /> <PokeTier>{tier}</PokeTier>
            <PokeName>
                {pokemon.name}
                {pokemon.types.map(x => (
                    <PokeType title={`Element : ${x}`} src={require(`../assets/icon/${x.toString().toLowerCase()}.png`).default} /> 
                ))}
            </PokeName>
            <PokePower>
                <PokeSpan title="HP Point">
                    <PokeHp src={require(`../assets/icon/heart.png`).default} />{pokemon.maxHP.toLocaleString()}
                </PokeSpan>
                <PokeSpan title="Combat Power">
                    <PokeHp src={require(`../assets/icon/swords.png`).default} />{pokemon.maxCP.toLocaleString()}
                </PokeSpan>
                {(TotalOwned > 0 && (
                    <PokeSpan title="Total Ownership">
                        <PokeHp src={require(`../assets/icon/pokeball.png`).default} />{TotalOwned.toLocaleString()}
                    </PokeSpan>
                ))}
            </PokePower>            
            <PokeSkillBox>
                {
                    pokemon && 
                    pokemon.attacks && 
                    pokemon.attacks.special
                    .slice(0, 2)
                    .map(attack => (
                        <PokeSkill title={`Skill : ${attack.name}`} key={`${attack.name} - ${attack.damage}`}>
                            {attack.name}
                        </PokeSkill>
                    ))
                }
            </PokeSkillBox>
        </Pokebox>
    );
}