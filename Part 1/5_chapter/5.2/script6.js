function random(mn, mx) {
    return Math.trunc(Math.random() * (mx + 1 - mn) + mn);
}

for (let i = 0; i < 10; i++)
    console.log(random(1, 5));