function Calculator() {
    this.read = function() {
        this.a = +prompt('1 number ?');
        this.b = +prompt('2 number ?');
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );