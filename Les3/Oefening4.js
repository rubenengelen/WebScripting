class Account{
    constructor(landcode, banknummer, tien, saldo){
        this.landcode = landcode;
        this.banknummer = banknummer;
        this.tien = tien;
        this.saldo = saldo;
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

    set saldo(saldo){
        this._saldo = saldo;
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

    get saldo(){
        return this._saldo;
    }

    storten(bedrag){
        this._saldo = this._saldo + bedrag;
    }

    afhalen(bedrag){
        this._saldo = this._saldo - bedrag;
    }

    print(){
        console.log(this._landcode,this._banknummer,this._tien,this.controle, this._saldo);
    }
}

let account = new Account("BE", "97", "0011223344", 2500);
account.print();
account.storten(50);
account.print();
account.afhalen(500);
account.print();