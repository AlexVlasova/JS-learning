function Calculator () {
    this.options = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function (str) {
        let splitted = str.split(' '),
            a = +splitted[0],
            b = +splitted[2],
            method = splitted[1];

        if (!this.options[method] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.options[method](a, b);
    }

    this.addMethod = function (name, func) {
        this.options[name] = func;
    }
}

// let calc = new Calculator;

// console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8