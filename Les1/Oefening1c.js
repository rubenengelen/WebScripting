let aantalLijnen = 7;
let output = "";
let spaties = "       ";
let output2 = "";

while(aantalLijnen > 0)
{
    output = output + "#";
    spaties = spaties.slice(1);
    console.log(spaties + output + output2);
    output2 = output2 + "#";
    aantalLijnen--;
}