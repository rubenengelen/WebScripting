let symbolIndex = 0;
let aantalLijnen = 7;
for (let i = 0; i < aantalLijnen; i++)
{
    let lijn = "";
    for(let j = 0; j < 1+2*i; j++)
    {
        lijn += symbolIndex % 5 == 0 ? "@" : "#";
        symbolIndex++;
    }
    console.log(" ".repeat(aantalLijnen-i) + lijn);
}