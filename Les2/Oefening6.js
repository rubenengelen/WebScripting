function reverseArray(array)
{
    let nieuw = [null];
    for(let i = 0; i < array.length; i++)
    {
        nieuw[i] = array[array.length - 1 - i];
    }
    return nieuw;
}

let a = [1, 2, 3];

console.log(reverseArray(a));