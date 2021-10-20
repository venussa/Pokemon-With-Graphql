import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Pokebox = styled.div`
    display: block;
    margin: 20px;
`;

const PokeContent = styled.div`
    padding: 20px;
    padding-bottom: 5px;
    text-align: center;
`;

const PokeImg = styled.img`
    width: 300px;
    height: 220px;
    margin-top: -10px;
`;

const PokeMsg = styled.p`
    font-family: Arial;
    font-weight: 600;
    font-size: 14px;
    margin-top: -30px;
`;

const PokeGaca = styled.button`
    width: 200px;
    display: inline-block;
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
    cursor: pointer;
`;

const PokeInput = styled.input`
    width: 130px;
    padding: 10px;
    border: 1px #03AC0E solid;
    border-radius: 5px 0 0 5px;
`;

const MyLink = styled(NavLink)`
    color: #03AC0E;
    text-decoration: none;
`;

export{
    Pokebox,
    PokeContent,
    PokeImg,
    PokeMsg,
    PokeGaca,
    PokeInput,
    MyLink
}