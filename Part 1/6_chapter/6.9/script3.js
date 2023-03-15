function debounce(f, ms) {
    let previous = null;

    function wrapper(...args) {
        let now = Date.now();

        if (previous === null || now - previous > ms) {
            previous = now;
            f.apply(this, args);
        }
    }

    return wrapper;
}

let f = debounce((n) => console.log(n), 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)