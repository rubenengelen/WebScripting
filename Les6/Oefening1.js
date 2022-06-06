'use strict';
class InputError extends Error {}

class Persoon{
    constructor(id, naam){
        if(typeof id != 'number' || typeof naam != 'string'){
            throw new Error("Foute waarde voor id of naam");
        }
        this._id = id;
        this._naam = naam;
    }

    toString(){
        return "[" + this._id + "] " + this._naam;
    }
}

class Loonwerker extends Persoon{
    constructor(id, naam, loonPerUur, aantalUrenGewerkt){
        super(id, naam);
        if(id < 0){
            throw new Error("id moet groter dan 0 zijn");
        }
        if(loonPerUur < 0){
            throw new Error("loonPerUur moet groter dan 0 zijn");
        }
        if(aantalUrenGewerkt < 0){
            throw new Error("aantalUrenGewerkt moet groter dan 0 zijn");
        }
        this._loonPerUur = loonPerUur;
        this._aantalUrenGewerkt = aantalUrenGewerkt;
    }

    berekenLoon(){
        return this._loonPerUur * this._aantalUrenGewerkt;
    }

    toString(){
        return "[" + this._id + "] " + this._naam + " " + this.berekenLoon();
    }
}

class Manager extends Persoon{
    constructor(id, naam){
        super(id, naam);
        if(id < 0){
            throw new Error("id moet groter dan 0 zijn");
        }
        this._loonWerkers = [];
    }

    voegLoonWerkerToe(loonwerker){
        if( !(loonwerker instanceof Loonwerker)){
            throw new Error("Input is niet van het type Loonwerker")
        }
        this._loonWerkers.push(loonwerker);
        console.log("Succesvol toegevoegd");
    }

    berekenLoon(){
        let loon = 0;
        for(let werker of this._loonWerkers.length){
            loon += werker.berekenLoon();
        }
        return Math.round(loon*0.2);
    }
}

// /*
// let Bob = new Persoon(1, "Bob");
// console.log(Bob.toString());
// let Tim = new Loonwerker(2,"Tim", 20, 11);
// console.log(Tim.toString());
// let Sofie = new Manager(3, "Sofie");
// Sofie.voegLoonWerkerToe(Tim);
// console.log(Sofie.berekenLoon());*/

let persoon = new Persoon(1,"mieke");
let manager=new Manager(2,"jan");
let werker1=new Loonwerker(3,"tim",11,13);
let werker2=new Loonwerker(4,"sofie",2,50);
manager.voegLoonWerkerToe(werker1);
manager.voegLoonWerkerToe(werker2);
console.log(persoon.toString());
// [1] mieke
console.log(werker1.toString());
// [2] tim = 143
console.log(werker2.toString());
// [3] sofie = 100
console.log(manager.toString());
// [1] jan = 49
