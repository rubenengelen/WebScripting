'use strict';
class InputError extends Error {}

class SpeelbaarObject{

    get waarde(){
        return 0;
    }

    isGelijkAan(speelbaarObject){
        if(!(speelbaarObject instanceof SpeelbaarObject)){
            throw new Error("geen speelbaarobject");
        }
        return true;
    }
    
    genereerWillekeurigGetal(min, max){
        if(!Number.isInteger(min) || !Number.isInteger(max) || min <= 0 || min > max){
            throw new Error("misse ingave voor min of max");
        }
        return Math.floor(min +Math.random() * (1+max-min) );
    }
}

class Dobbelsteen extends SpeelbaarObject{
    constructor(){
        super();
        let r = this.genereerWillekeurigGetal(1,6);
        switch(r){
            case 1:
                this._zijde = "1";
                break;
            case 2:
                this._zijde = "2";
                break;
            case 3:
                this._zijde = "3";
                break;
            case 4:
                this._zijde = "4";
                break;
            case 5:
                this._zijde = "5";
                break;
            case 6:
                this._zijde = "*";
                break;
        }
    }

    get zijde(){
        return this._zijde;
    }

    get waarde(){
        switch(this._zijde){
            case "1":
                return 1;
            case "2":
                return 2;
            case "3":
                return 3;
            case "4":
                return 4;
            case "5":
                return 5;
            case "*":
                return 0;
        }
    }

    isGelijkAan(speelbaarObject) {
        if(!(speelbaarObject instanceof SpeelbaarObject)){
            throw new Error("‘misse ingave: geen SpeelbaarObject");
        }
        if(!(speelbaarObject instanceof Dobbelsteen)){
            throw new Error("‘misse ingave: geen Dobbelsteen");
        }

        if(this._zijde === speelbaarObject._zijde || this._zijde === "*" || speelbaarObject._zijde === "*"){
            return true
        }
        return false;
    }
}

class Worp{
    constructor(aantalDobbelstenen){
        if (! Number.isInteger(aantalDobbelstenen) ||  aantalDobbelstenen <= 2 ){
            throw new Error('misse ingave voor aantalDobbelstenen');
        }
        this._dobbelstenen=[];
        for(let i = 0; i < aantalDobbelstenen; i++){
            this.voegDobbelsteenToe(new Dobbelsteen);
        }

    }

    voegDobbelsteenToe(dobbelsteen){
        if(!(dobbelsteen instanceof Dobbelsteen)){
            throw new Error("‘misse ingave: geen Dobbelsteen");
        }
        this._dobbelstenen.push(dobbelsteen);
    }

    get resultaat(){
        for(let i = 0; i < this._dobbelstenen.length; i++){
            for(let j = 0; j < this._dobbelstenen.length; j++){
                if(this._dobbelstenen[i].isGelijkAan(this._dobbelstenen[j])){
                    console.log("i = ", i , " j = ", j);
                    return this._dobbelstenen[i].waarde+this._dobbelstenen[j].waarde;
                }
            }
        }
    }
}

let worp = new Worp( 4 );
console.log( worp.resultaat );