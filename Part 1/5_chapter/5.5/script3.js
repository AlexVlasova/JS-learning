function filterRangeInPlace(arr, a, b) {
    let i = 0;

    while (i < arr.length) {
        if (arr[i] >= a && arr[i] <= b) {
            i++;
            continue;
        }

        arr.splice(i, 1);
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]