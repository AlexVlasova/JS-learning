let arr = [1, 2, 3];

for (let i = 0; i < 10; i++) {
    shuffle(arr);
    console.log(arr);
}

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}