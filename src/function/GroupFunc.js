import styled from '@emotion/styled';

const PokeContainer = styled.div`
    margin: auto;
    margin-top: 125px;
    max-width: 450px;
`;

const SaveData = ((name, value, json = false) => {
    return (json === true) ? localStorage.setItem(name, JSON.stringify(value)) :  localStorage.setItem(name, value);
});

const GetData = ((name, json = false) => {
    return (json === true) ? JSON.parse(localStorage.getItem(name)) :  localStorage.getItem(name);
});

const ArrayShuffle = ((array) => {
    array.sort(() => Math.random() - 0.5);
});

const IsNull = ((data) => {
    return (data === null) ? true : false;    
});

const Random = ((number) => {
    return Math.floor(Math.random() * number + 1)
});

const objectLength = ((obj) => {
    var result = 0;
    for(var prop in obj)
        if (obj.hasOwnProperty(prop))
            result++;
    return result;
});

const GetTier = ((cp, hp) => {

    let power_score = (parseInt(cp) + parseInt(hp)) / 2;

    let Tier = [
        ["Legendary", 3900, "#fa3939", "#fff", "#ffd6d6"],
        ["Tier 9", 3100, "#fa8d2d", "#fff", "#facfaa"],
        ["Tier 8", 2600, "#f5c440", "#fff", "#fae8b6"],
        ["Tier 7", 2000, "#0db566", "#fff", "#ddd"],
        ["Tier 6", 1500, "#0db2b5", "#fff", "#ddd"],
        ["Tier 5", 1100, "#f5f5f5", "#666", "#ddd"],
        ["Tier 4", 800, "#f5f5f5", "#666", "#ddd"],
        ["Tier 3", 600, "#f5f5f5", "#666", "#ddd"],
        ["Tier 2", 500, "#f5f5f5", "#666", "#ddd"],
        ["Tier 1", 300, "#f5f5f5", "#666", "#ddd"],
    ];

    let result = null;

    if (power_score >= Tier[0][1]) {
        result = [Tier[0][0], Tier[0][2], Tier[0][3]];
    }else{
        Tier = Tier.reverse();
        for (let x = 0; x < Tier.length - 1; x += 1) {
            if (power_score >= Tier[x][1]){
                result = [Tier[x][0], Tier[x][2], Tier[x][3]];
            }
        }
    }

    Tier = Tier.reverse();

    return (result === null) ? [
        Tier[Tier.length - 1][0], 
        Tier[Tier.length - 1][2], 
        Tier[Tier.length - 1][3]
    ] : result;
});

const GetTotalOwned = ((id) => {
    
    let data = GetData("pokemon", true);
    let total = 0;

    if (!IsNull(data))
    {
        // eslint-disable-next-line
        data.map((extract) => {
            if (extract.id === id)
            {
                total += 1;
            }
        });
    }

    return total;
});

export{
    PokeContainer,
    SaveData,
    GetData,
    ArrayShuffle,
    IsNull,
    Random,
    GetTotalOwned,
    GetTier,
    objectLength
}