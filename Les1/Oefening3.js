let grootte = 8;
let output = "";
for(let i = 0; i < grootte; i++)
{
    if(i%2 != 0)
    {
        output = " ";
    }
    else
    {
        output = "";
    }
    for(let j = 0; j < grootte; j++)
    {
        if (j % 2 === 0)
        {
            output = output + "#";
        } else
        {
            output = output + " ";
        }
    }
    console.log(output);
}