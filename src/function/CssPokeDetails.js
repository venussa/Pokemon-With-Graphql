import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const PokeImgBox = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    border-bottom: 1px rgb(229, 231, 233) solid;
    text-align: center;
    overflow: hidden;
`;

const Pokebox = styled.div`
    display: block;
    margin-top: 20px;
    margin-bottom: -8px;
    margin: 20px;
    font-family: sans-serif;
    position: relative;
    min-height: 90px;
    border-radius: 10px;
    background: #fff;
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
    text-decoration: none;
    padding-bottom: 10px;
`;

const PokeName = styled.p`
    font-weight: 600;
    margin-top: -20px;
    color: #000;
    font-size: 20px;
`;

const PokeImg = styled.img`
    height: 150px;
    padding: 10px;
    border-radius: 10px;
    background: #fff;
    margin: 10px;
`;

const PokeType = styled.img`
    width: 17px;
    position: relative;
    top: 4px;
    margin-left: 5px;
`;

const PokePower = styled.p`
    margin-top: -12px;
`;

const PokeSpan = styled.span`
    position: relative;
    font-size: 11px;
    padding-left: 20px;
    margin-right: 15px;
    font-weight: 600;
    color: #434343;
`;

const PokeHp = styled.img`
    position: absolute;
    width: 12px;
    top: 0px;
    left: 0px;
`;

const PokeSkillBox = styled.div`
    color: #777;
    margin-bottom: 20px;
`;

const PokeContent = styled.div`
    padding: 20px;
    padding-bottom: 5px;
`;

const PokeSkill = styled.span`
    background: #D6FFDE;
    margin-right: 5px;
    padding: 5px 10px;
    font-size: 9px;
    border-radius: 5px;
    color: #03AC0E;
    font-weight: 600;
`;

const PokeRow = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 10px;
`;

const PokeData = styled.div`
    display: inline-block;
    width: 70%;
    font-size: 12px;
    color: #777;
`;

const PokeTitle = styled.div`
    display: inline-block;
    width: 30%;
    font-size: 12px;
    color: #000;
`;

const PokeSmall = styled.small`
    margin-right: 5px;
    margin-bottom:5px;
    font-size: 11px;
    display: block;
`;

const PokeHeading = styled.h4`
    margin-top: 0px;
    border-bottom: 1px rgb(229, 231, 233) solid;
    padding: 20px;
    margin-bottom: 0px;
`;

const PokeLink = styled(NavLink)`
    text-decoration: none;
    margin-left: 5px;
    color: #03AC0E;
    font-weight: 600;
`;

const PokeElLink = styled(NavLink)``;

const PokeDescription = styled.div`
    font-size: 13.5px;
    line-height: 21px;
    color: #444;
`;

const PokeGaca = styled(NavLink)`
    width: 100%;
    display: block;
    text-align: center;
    background: #03AC0E;
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 600;
    border: 1px #03AC0E solid;
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    text-decoration: none;
`;

export{
    PokeImgBox,
    PokeLink,
    Pokebox,
    PokeType,
    PokeTitle,
    PokeSpan,
    PokeSkill,
    PokeSkillBox,
    PokeRow,
    PokePower,
    PokeName,
    PokeDescription,
    PokeGaca,
    PokeHeading,
    PokeSmall,
    PokeData,
    PokeHp,
    PokeContent,
    PokeImg,
    PokeElLink

}