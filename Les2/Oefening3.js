function fibonacci(getal)
{
    if(getal === 0 || getal === 1)
    {
        return 1;
    }
    else
    {
        return fibonacci(getal-2) + fibonacci(getal-1);
    }
}

console.log(fibonacci(4));