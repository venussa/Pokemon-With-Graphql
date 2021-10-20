import React from 'react';
import { useHistory } from 'react-router';
import $ from 'jquery';
import { NavigationTop, Icon, Logo, LinkBox, TextMargin, MyLink, PokeSearch, SearchMenu, CloseImg } from './function/CssApp';

export function Navigation() {

    const History = useHistory();

    const Search = ((event) => {
        if (event.key === 'Enter') {
            ShowSearch();
            History.push(`/search/${event.target.value}`);
        }
    });

    const ShowSearch = (() => {

        let menuEl   = $("#menu");
        let searchEl = $("#search");
    
        if (searchEl.css("display") === "none") {

            menuEl.hide();
            searchEl.fadeIn();
          
        }else{

            searchEl.hide();
            menuEl.fadeIn();

        }

    });

    return (
        <main>
            <NavigationTop>
                <Logo src={require(`./assets/icon/logo.png`).default}/>
                <LinkBox>

                    <div id="menu">
                        <MyLink to="/">
                            <Icon src={require(`./assets/icon/home.png`).default} />
                            <TextMargin>HOME</TextMargin>
                        </MyLink>
                        <MyLink to="/my_pokemon">
                            <Icon src={require(`./assets/icon/pokeball.png`).default} />
                            <TextMargin>MY POKEMON</TextMargin>
                        </MyLink>
                        <SearchMenu onClick={ShowSearch}>
                            <Icon src={require(`./assets/icon/mark.png`).default} />
                            <TextMargin style={{marginLeft: "27px"}}>SEARCH</TextMargin>
                        </SearchMenu>
                    </div>

                    <div id="search" style={{display: "none"}}>
                        <PokeSearch placeholder="Search with pokename, element, or tier ..." onKeyDown={Search} />
                        <CloseImg onClick={ShowSearch} src={require(`./assets/icon/close.png`).default}/>
                    </div>

                </LinkBox>
            </NavigationTop>
        </main>
    );
}