function sumToFor(n) {
    let s = 0;

    for (let i = 1; i <= n; i++) {
        s += i;
    }

    return s;
}

function sumToRecursion(n) {
    if (n == 1) return 1;

    return n + sumToRecursion(n - 1);
}

function sumToMath(n) {
    return (n + 1) / 2 * n;
}

console.log(sumToMath(100000));
console.log(sumToFor(100000));
console.log(sumToRecursion(100000));


//P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// Математика - самый быстрый. Несколько вычислений, одинаковое для любого числа
// цикл - медленнее, так как скорость зависит от числа
// рекурсия - самый медленный. Для запуска функции требуются доп.ресурсы компьютера

//P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
// Нет, будет превышена максимальная глубина рекурсии