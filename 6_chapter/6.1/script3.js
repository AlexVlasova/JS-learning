function fib(n) {
    if (n == 1) return 1;
    if (n == 2) return 1;

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13


function fibb(n) {
    let nums = [1, 1];
    let i = 2;

    while (i < n) {
        nums.push(nums[0] + nums[1]);
        nums.shift();
        i++;
    }

    return nums[1];
}

console.log(fibb(3)); // 2
console.log(fibb(7)); // 13
console.log(fibb(77)); // 5527939700884757