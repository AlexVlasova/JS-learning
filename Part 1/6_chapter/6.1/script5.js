let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printList(list) {
    let current =list;

    let nums = [];

    while (current) {
        nums.push(current.value);
        current = current.next;
    }

    nums.reverse();

    nums.forEach(elem => console.log(elem));
}

printList(list);

function printListRecursion(list) {
    if (!list) return;

    printListRecursion(list.next);
    console.log(list.value);
}

printListRecursion(list);