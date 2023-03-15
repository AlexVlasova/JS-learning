n = 100;

for (let num = 2; num <= n; num++) {
    let isSimple = true;

    for (let i = 2; i <= num ** (1/2); i++) {
        if (num % i == 0) {
            isSimple = false;
            break;
        }
    }

    if (isSimple) {
        console.log(num);
    }
}