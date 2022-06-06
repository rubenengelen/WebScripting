function telChar(woord, symbool)
{
    let aantal = 0;
    for(let i = 0; i < woord.length; i++)
    {
        if(woord[i] === symbool)
        {
            aantal++;
        }
    }
    return aantal;
}

function telB(woord)
{
    return telChar(woord, "b");
}

console.log(telB("bobslee"));