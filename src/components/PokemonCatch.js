import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrayShuffle, SaveData, GetData, IsNull, Random } from '../function/GroupFunc';
import { Pokebox, PokeContent, PokeImg, PokeMsg, PokeGaca, PokeInput, MyLink } from '../function/CssPokeCatch';
import $ from 'jquery';

export function Pokemon({ pokemons })
{
    const Chance  = 50;
    const RngData = [];
    const GoTo    = useHistory();

    const SavePokemon = (() => {

        let storage        = [];
        let Newname        = $("#customName");
        let SuccessMsg     = $("#success-msg");
        let FailedMsg      = $("#failed-msg");
        let InputContainer = $("#input-container");

        if (Newname.val().trim() === "" ) return false;
       
        if (!IsNull(GetData("pokemon"))) storage = GetData("pokemon", true);

        let catchName = 0;

        // eslint-disable-next-line
        storage.map((extract) => ((extract.newname && Newname.val().toLowerCase() === extract.newname.toLowerCase()) ? (catchName += 1) : false));

        if (catchName === 0)
        {
            pokemons.newname = Newname.val();
            pokemons.customid = parseInt((Date.now() / 1000));
            storage.push(pokemons);
            SaveData("pokemon", storage, true);
            SuccessMsg.fadeIn();
            FailedMsg.hide();
            InputContainer.hide();
            setTimeout(() => GoTo.push(`/my_pokemon`), 2000);
        }
        else
        {
            FailedMsg.fadeIn();
            SuccessMsg.hide();
        }
    });

    const CatchPokemon = (() => {
    
        for (let x = 1; x <= 100; x += 1) RngData.push(((x <= Chance) ? 1 : 0));
    
        ArrayShuffle(RngData);

        let RngIndex = Random(RngData.length);

        return ((RngData[RngIndex] === 1) ? true : false);

    });

    const RngStart = (() => {
        
        setTimeout(() => {

            let Loading = $("#loading");
            let Success = $("#success");
            let Failed  = $("#failed");

            Loading.fadeIn();
            Failed.hide();
            Success.hide();
            
            setTimeout(() => {
        
                if (CatchPokemon() === true)
                {
                    Success.fadeIn();
                    Failed.hide();
                }
                else
                {
                    Failed.fadeIn();
                    Success.hide();
                }
                
                Loading.hide();

            }, 5000);

        },1000);

    });

    setTimeout(() => { RngStart() }, 1);
    
    return (
        <main>
            <Pokebox >

                <PokeContent id="loading">
                    <PokeImg src={require('../assets/icon/rng.gif').default} />
                    <PokeMsg>Try to catch, please wait ...</PokeMsg>
                </PokeContent>

                <PokeContent id="success" style={{display : "none"}}>
                    <PokeImg src={require('../assets/icon/success.png').default} />
                    <PokeMsg>Congratulations, {pokemons.name} will be your new partner.
                        <span style={{fontWeight: 400 , display: "block", marginTop: "10px"}}>Enter a nickname for your new partner.</span>
                    </PokeMsg>
                    <div id="input-container">
                        <PokeInput id="customName" placeholder="Pokemon Name"></PokeInput>
                        <PokeGaca onClick={SavePokemon} style={{width: "70px", borderRadius: "0 5px 5px 0"}}>Save</PokeGaca>
                    </div>
                    <PokeMsg id="failed-msg" style={{color : "#c22727", fontSize : "10px", marginTop: "0px", display: "none"}}><i>* Name already used</i></PokeMsg>
                    <PokeMsg id="success-msg" style={{color : "#03AC0E", fontSize : "22px", marginTop: "20px", display: "none"}}>Success, redirecting ...</PokeMsg>
                </PokeContent>

                <PokeContent id="failed" style={{display : "none"}}>
                    <PokeImg src={require('../assets/icon/failed.png').default} />
                    <PokeMsg>Failed to catch pokemon. You can go <MyLink to={`/${pokemons.id}`}>back</MyLink> or</PokeMsg>
                    <PokeGaca onClick={RngStart}>Try Again</PokeGaca>
                </PokeContent>
                
            </Pokebox>
        </main>
    )
}