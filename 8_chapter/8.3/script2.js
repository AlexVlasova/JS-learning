Function.prototype.defer = function (ms) {
    let func = this;
    return function (a, b) {
        setTimeout(() => func.call(this, a, b), ms);
    }
}

function f(a, b) {
    console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.