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
    min-height: 30px;
    border-radius: 10px;
    background: #fff;
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
    text-decoration: none;
    overflow: hidden;
`;

const PokeName = styled.p`
    font-weight: 600;
    margin-left: 70px;
    margin-top: 5px;
    color: #000;
`;

const PokeImg = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
`;

const PokeType = styled.img`
    width: 14px;
    position: relative;
    top: 2px;
    margin-left: 5px;
`;

const PokePower = styled.p`
    margin-left: 70px;
    margin-top: -12px;
    margin-bottom: 10px;
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
    margin-left: 70px;
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

const PokeReal = styled.span`
    margin-left: 70px;
    font-size: 9px;
    color: #888;
    font-weight: 400;
    display: block;
    margin-top: 15px;
`;

const PokeRemove = styled.img`
    width: 15px;
    position: relative;
    top: 4px;
    left: -5px;
`;

const PokeRemoveContainer = styled.span`
    position: absolute;
    z-index: 998;
    bottom: 0px;
    right: 20px;
    font-family: Arial;
    font-size: 10px;
    border-top: 1px #ddd solid;
    border-left: 1px #ddd solid;
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
    padding: 2px;
    padding-bottom: 5px;
    border-radius: 10px 0 10px 0;
    display: block;
    width: 60px;
    padding-top: 0px;
    font-weight: 600;
    color: #444;
    padding-left: 10px;
    cursor: pointer;
`;

const PokeMain = styled.main`
    position: relative;
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
    Pokebox,
    PokeReal,
    PokeRemove,
    PokeRemoveContainer,
    PokeMain
}