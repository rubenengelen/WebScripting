class Data{
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    set day(day){
        this._day = day;
    }

    set month(month){
        this._month = month;
    }

    set year(year){
        this._year = year;
    }

    get day(){
        return this._day;
    }

    get month(){
        return this._month;
    }

    get year(){
        return this._year;
    }

    print(){
        console.log(this._day,"/", this._month,"/", this._year)
    }

    static MONTHS = [null, "jan", "feb", "mar", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "sep", "nov", "dec"];

    printMonth(){
        console.log(this._day,"/", MONTHS[this._month],"/", this._year)
    }
}
let date = new Data(2,3,2022);

date.print();
date.printMonth();