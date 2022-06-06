'use strict';
class InputError extends Error {}

class Vec{
    constructor(x, y){
        if(typeof x != 'number' || typeof y != 'number'){
            throw new InputError();
        }
        this.x = x;
        this.y = y;
    }

    set x(x){
        this._x = x;
    }

    set y(y){
        this._y = y;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    plus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError();
        }
        return new Vec(this._x+vec._x, this._y+vec._y);
    }

    minus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError();
        }
        return new Vec(this._x-vec._x, this._y-vec._y);
    }

    lengte(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError();
        }
        return Math.sqrt(this._x*vec._x + this._y*vec._y);
    }

    maakString(){
        console.log("("+ this._x + "," + this._y + ")");
    }
}

try{
    let v = new Vec(2,3);
    let v2 = new Vec(3,4);
    let v3 = v.plus(v2);
    v.maakString();
    v2.maakString();
    v3.maakString();
    console.log(v.lengte(v2));


} catch(error){
    console.log("error");
}
console.log("done");