import React from 'react';
import { GetTotalOwned, GetTier } from '../function/GroupFunc';
import { PokeImgBox, PokeLink, Pokebox, PokeType, PokeTitle, PokeSpan, PokeSkill, PokeSkillBox, PokeRow, PokePower, PokeName, PokeDescription, PokeGaca, PokeHeading, PokeSmall, PokeData, PokeHp, PokeContent, PokeImg, PokeElLink } from '../function/CssPokeDetails';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export function Pokemon({ pokemons }) {

    const TotalOwned = GetTotalOwned((pokemons.id && (pokemons.id)));

    let [tier, background, color] = GetTier(pokemons.maxCP, pokemons.maxHP);

    const PokeTier = styled(NavLink)`
        font-size: 12px;
        border-left: 1px #ddd solid;
        border-bottom: 1px #ddd solid;
        padding: 5px 20px 5px 20px;
        position: absolute;
        top: 0px;
        right: 0px;
        border-radius: 0 10px 0 10px;
        box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
        background: ${background};
        color: ${color};
        text-decoration: none;
    `;
    
    return (
    <main>

        <Pokebox>
            <PokeImgBox>
                <PokeImg src={pokemons.image} />
            </PokeImgBox>
            <PokeContent>
                <PokeName>{pokemons.name} <PokeTier to={`/search/${tier}`}>{tier}</PokeTier></PokeName>
                <PokePower>
                    <PokeSpan title="HP Point">
                        <PokeHp src={require(`../assets/icon/heart.png`).default} />{pokemons.maxHP.toLocaleString()}
                    </PokeSpan>
                    <PokeSpan title="Combat Point">
                    <PokeHp src={require(`../assets/icon/swords.png`).default} />{pokemons.maxCP.toLocaleString()}
                    </PokeSpan>
                    {(TotalOwned > 0 && (
                        <PokeSpan title="Total Ownership">
                            <PokeHp src={require(`../assets/icon/pokeball.png`).default} />{TotalOwned.toLocaleString()}
                        </PokeSpan>
                    ))}
                </PokePower>            
                <PokeSkillBox>
                    <PokeSmall>Special Skills: </PokeSmall> 
                    {
                        pokemons && 
                        pokemons.attacks && 
                        pokemons.attacks.special
                        .slice(0, 3)
                        .map(attack => (
                            <PokeSkill title={`Skill: ${attack.name}`} key={`${attack.name} - ${attack.damage}`}>
                                {attack.name}
                            </PokeSkill>
                        ))
                    }
                </PokeSkillBox>
                <PokeSkillBox>
                    <PokeSmall>Basic Skills: </PokeSmall> 
                    {
                        pokemons && 
                        pokemons.attacks && 
                        pokemons.attacks.fast
                        .slice(0, 3)
                        .map(attack => (
                            <PokeSkill title={`Skill: ${attack.name}`} key={`${attack.name} - ${attack.damage}`}>
                                {attack.name}
                            </PokeSkill>
                        ))
                    }
                </PokeSkillBox>

                <PokeGaca to={`/catch/${pokemons.id}`} >Catch Pokemon</PokeGaca>
            </PokeContent>
        </Pokebox>

        <Pokebox>
            <PokeHeading>Pokemon Details</PokeHeading>
            <PokeContent>
                <PokeRow>
                    <PokeTitle>Classification</PokeTitle>
                    <PokeData>: {pokemons.classification}</PokeData>
                </PokeRow>
                <PokeRow>
                    <PokeTitle>Basic Element</PokeTitle>
                    <PokeData>: 
                        {
                            pokemons.types.map(x => (
                                <span>
                                    <PokeElLink to={`/search/${x}`}>
                                        <PokeType title={`Element: ${x}`} src={require(`../assets/icon/${x.toString().toLowerCase()}.png`).default} /> 
                                    </PokeElLink>
                                </span>
                            ))
                        }    
                    </PokeData>
                </PokeRow>
                <PokeRow>
                    <PokeTitle>Resistants</PokeTitle>
                    <PokeData>: 
                    {
                        pokemons.resistant.map(x => (
                            <span>
                                <PokeElLink to={`/search/${x}`}>
                                    <PokeType title={`Element: ${x}`} src={require(`../assets/icon/${x.toString().toLowerCase()}.png`).default} /> 
                                </PokeElLink>
                            </span>
                        ))
                    }    
                    </PokeData>
                </PokeRow>
                <PokeRow>
                    <PokeTitle>Weakness</PokeTitle>
                    <PokeData>: 
                        {
                            pokemons.weaknesses.map(x => (
                                <span>
                                    <PokeElLink to={`/search/${x}`}>
                                        <PokeType title={`Element: ${x}`} src={require(`../assets/icon/${x.toString().toLowerCase()}.png`).default} /> 
                                    </PokeElLink>
                                </span>
                            ))
                        }     
                    </PokeData>
                </PokeRow>
                <PokeRow>
                    <PokeTitle>Weight</PokeTitle>
                    <PokeData>: {pokemons.weight.minimum.toUpperCase()} - {pokemons.weight.maximum.toUpperCase()}</PokeData>
                </PokeRow>
                <PokeRow>
                    <PokeTitle>Height</PokeTitle>
                    <PokeData>: {pokemons.height.minimum.toUpperCase()} - {pokemons.height.maximum.toUpperCase()}</PokeData>
                </PokeRow>

                { pokemons && pokemons.evolutions !== null && (
                    <PokeRow>
                        <PokeTitle>Next Evolution</PokeTitle>
                        <PokeData>: 
                            {<PokeLink to={`/${pokemons.evolutions[0].id}`}>{pokemons.evolutions[0].name}</PokeLink>}    
                        </PokeData>
                    </PokeRow> 
                )}                  
            </PokeContent>
        </Pokebox>

        <Pokebox style={{marginBottom: "20px"}}>
            <PokeHeading>Description</PokeHeading>
            <PokeContent>
                <PokeDescription>
                    {pokemons.name} is a pokemon that has the basic elements of {pokemons.types[0]}, 
                    and has resistance to the {pokemons.resistant[0]} element. This Pokemon is categorized 
                    as a {pokemons.classification} which has a weakness with {pokemons.weaknesses[0]}.
                </PokeDescription>
            </PokeContent>
        </Pokebox>
    </main>
    )
}