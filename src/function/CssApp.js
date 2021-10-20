import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const NavigationTop = styled.div`
    background : #fff;
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 999;
    text-align: center;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
`;

const Icon = styled.img`
    width: 20px;
    margin-left: 10px;
    margin-top: 0px;
    position: absolute;
    left: 0px;
    top: 2px;
`;

const Logo = styled.img`
    width: 100px;
    margin-top: 10px;
`;

const LinkBox = styled.div`
    padding: 15px;
    text-align: center;
    border-top: 1px #ddd solid;
    margin-top: 10px;
    margin-left: -10px;
    height: 20px;
`;
const MyLink = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-family: Arial;
    padding: 5px;
    font-size: 13px;
    position: relative;
    font-weight: 600;
`;

const SearchMenu = styled.span`
    text-decoration: none;
    color: #000;
    font-family: Arial;
    padding: 5px;
    font-size: 13px;
    position: relative;
    font-weight: 600;
    cursor: pointer;
`;

const TextMargin = styled.span`
    margin-left: 30px;
`;

const PokeSearch = styled.input`
    width: 79%;
    max-width: 370px;
    padding: 7px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
    border: 1px #ddd solid;
    border-radius: 20px;
    margin-left: 0px;
    background: #D6FFDE;
    position: relative;
    top: -10px;
`;

const CloseImg = styled.img`
    width: 25px;
    position: relative;
    top: -2px;
    left: 5px;
    cursor: pointer;
`;

export{
    NavigationTop,
    Icon,
    Logo,
    LinkBox,
    TextMargin,
    MyLink,
    PokeSearch,
    CloseImg,
    SearchMenu 
}