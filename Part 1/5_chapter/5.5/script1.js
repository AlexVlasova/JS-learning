function camelize(str) {
    let arrStr = str.split('-');

    for (let i = 1; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
    }

    return arrStr.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));