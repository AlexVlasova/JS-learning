let calculator = {
    read() {
        this.a = +prompt('1 number ?');
        this.b = +prompt('2 number ?');
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );