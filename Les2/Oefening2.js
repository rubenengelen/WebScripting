function isEven(getal)
{
    if(getal === 0)
    {
        console.log("true");
    }
    else if (getal === 1)
    {
        console.log("false");
    }
    else
    {
        isEven(getal-2);
    }
}

isEven(8);