import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

const Pokebox = styled(NavLink)`
    display: block;
    padding: 10px;
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Arial;
    position: relative;
    min-height: 90px;
    border-radius: 10px;
    background: #fff;
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
    text-decoration: none;
    overflow: hidden;
`;

const PokeName = styled.p`
    font-weight: 600;
    margin-left: 110px;
    margin-top: 5px;
    color: #000;
`;

const PokeImg = styled.img`
    width: 90px;
    height: 90px;
    position: absolute;
`;

const PokeType = styled.img`
    width: 14px;
    position: relative;
    top: 2px;
    margin-left: 5px;
`;

const PokePower = styled.p`
    margin-left: 110px;
    margin-top: -12px;
`;

const PokeSpan = styled.span`
    position: relative;
    font-size: 10px;
    padding-left: 20px;
    margin-right: 15px;
    font-weight: 600;
    color: #434343;
`;

const PokeHp = styled.img`
    position: absolute;
    width: 13px;
    top: -1px;
    left: 0px;
`;

const PokeSkillBox = styled.div`
    margin-left: 110px;
`;

const PokeSkill = styled.span`
    background: #D6FFDE;
    margin-right: 5px;
    padding: 5px 10px;
    font-size: 9px;
    border-radius: 5px;
    font-weight: 600;
    color: #03AC0E;
`;

export {
    PokeHp,
    PokeImg,
    PokeName,
    PokePower,
    PokeSkill,
    PokeSkillBox,
    PokeSpan,
    PokeType,
    Pokebox
}