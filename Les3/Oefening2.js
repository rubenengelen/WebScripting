
class Person{
    constructor(firstname, lastname, dateOfBirth){
        this.firstname=firstname;       // <-- setter wordt aangeroepen
        this.lastname=lastname;         // <-- setter wordt aangeroepen
        this.dateOfBirth=dateOfBirth;   // <-- setter wordt aangeroepen
    }
    set firstname(firstname){
        this._firstname=firstname;
    }
    set lastname(lastname){
        this._lastname=lastname;
    }
    set dateOfBirth(dateOfBirth){
        this._dateOfBirth=dateOfBirth;
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get dateOfBirth(){
        return this._dateOfBirth;
    }
    calculateAge(){
        let now = new Date();
        let birthDayThisYear=new Date(now.getFullYear(), this._dateOfBirth.getMonth(), this._dateOfBirth.getDate());
        let differenceInYears=now.getFullYear()-this._dateOfBirth.getFullYear();
        if (now < birthDayThisYear){
            differenceInYears--;
        }
        return differenceInYears;
    }

    print(){
        console.log(`${this._firstname} ${this._lastname} ${this.calculateAge()}` );
    }

}

let person = new Person("Bob","Engelen",new Date('June 25, 2000'));
person.print();
person.firstname="Ruben";             // <-- setter wordt aangeroepen
console.log(person.firstname);      // <-- getter wordt aangeroepen
console.log(person.calculateAge());
person.print();