function readNumber() {
    let n;

    do {
        n = prompt('n?');

        if (isFinite(n) && n !== '') {
            return +n;
        }
    } while (n !== null);

    return null;
}

alert(readNumber());