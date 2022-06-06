class Account{
    constructor(landcode, banknummer, tien){
        this.landcode = landcode;
        this.banknummer = banknummer;
        this.tien = tien;
    }

    set landcode(landcode){
        this._landcode = landcode;
    }

    set banknummer(banknummer){
        this._banknummer = banknummer;
    }

    set tien(tien){
        this._tien = tien;
    }

    get landcode(){
        return this._landcode;
    }

    get banknummer(){
        return this._banknummer;
    }

    get tien(){
        return this._tien;
    }

    get controle(){
        return this._tien%97;
    }

    print(){
        console.log(this._landcode,this._banknummer,this._tien,this.controle);
    }
}

let account = new Account("BE", "97", "0011223344");
account.print();