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

class PolyLine{
    constructor(){
        this._vecs = [];
    }

    addVec(vec){
        this._vecs.push(vec);
    }

    maakString(){
        let lijn = [];
        for(let i = 0; i < this._vecs.length; i++)
        {
            lijn.push("(" + this._vecs[i]._x + "," + this._vecs[i]._y + ")");
        }
        console.log(lijn);
    }
}

let polyLine=new PolyLine();
polyLine.addVec(new Vec(1,2));
polyLine.addVec(new Vec(2,3));
polyLine.addVec(new Vec(5,7));
polyLine.maakString();
