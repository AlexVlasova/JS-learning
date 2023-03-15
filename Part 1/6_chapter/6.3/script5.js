function inBetween(start, end) {
    return function(x) {
        return x >= start && x <= end;
    }
}

function inArray(array) {
    return function(x) {
        return array.includes(x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2