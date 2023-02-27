function pow(x, n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res *= x;
    }

    return res;
}

let x = prompt('Какое число возводим в степень?', 1);
let n = prompt('В какую степень возводим?', 0);

alert(pow(x, n));