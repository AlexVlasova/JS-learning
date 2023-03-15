function printNumsInterval(from, to) {
    let n = from;

    const interval = setInterval(() => {
        console.log(n);
        n++;
        if (n > to) clearInterval(interval);
    }, 1000);
}

function printNumsTimeout(from, to) {
    let n = from;

    setTimeout(function printNext() {
        console.log(n);
        n++;
        if (n <= to) setTimeout(printNext, 1000);
    }, 1000);
}

// printNumsInterval(1, 10);
printNumsTimeout(1, 5);