function getMaxSubSum(arr) {
    if (arr.length == 0) return 0;

    let isGood = false;

    for (elem of arr) {
        if (elem >= 0) {
            isGood = true;
            break;
        }
    }

    if (!isGood) return 0;

    let mnDelta = arr[0];
    let mxSum = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];

        if (sum > mxSum) {
            mxSum = sum;
        }

        if (sum - mnDelta > mxSum) {
            mxSum = sum - mnDelta;
        }

        if (sum < mnDelta) {
            mnDelta = sum;
        }
    }

    return mxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
console.log(getMaxSubSum([]));