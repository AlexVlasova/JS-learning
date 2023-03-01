function sumInput() {
    let nums = [];

    let n = prompt('n?');
    while (n !== '' && n !== null && isFinite(n)) {
        nums.push(+n);
        n = prompt('n?');
    }

    let s = 0;

    for (let elem of nums) {
        s += elem;
    }
    return s;
}

alert(sumInput());