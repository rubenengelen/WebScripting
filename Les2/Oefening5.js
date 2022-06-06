function maakRij(min, max, stap = 1)
{
    let rij = [];
    for(let i = min; i <= max; i = i + stap)
    {
        rij[i - min] =  i;
    }
    return rij;
}

console.log(maakRij(1, 5, 2));