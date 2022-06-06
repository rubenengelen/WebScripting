let aantalLijnen = 7;
let output = "";
let spaties = "       ";

while(aantalLijnen > 0)
{
    output = output + "#";
    spaties = spaties.slice(1);
    console.log(spaties + output);
    aantalLijnen--;
}