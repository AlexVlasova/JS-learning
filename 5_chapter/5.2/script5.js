function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

for (let i = 0; i < 10; i++)
    console.log(random(1, 5));