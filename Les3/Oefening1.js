//jan = 0, feb = 1...

let person = {
    firstname:"Ruben",
    lastname:"Engelen",
    dateOfBirth: new Date(2000,5,25),
    calculateAge: function(){
        let now = new Date();
        let jaar = now.getFullYear() - this.dateOfBirth.getFullYear();
        if((now.getMonth() - this.dateOfBirth.getMonth()) < 0)
        {
            return jaar - 1;
        }
        else if((now.getMonth() - this.dateOfBirth.getMonth()) === 0 && now.getDate() < this.dateOfBirth.getDate())
        {
            return jaar - 1;
        }
        return jaar;
    } ,
    print(){
        console.log(this.firstname, this.lastname, this.calculateAge());
    }
}

person.print();