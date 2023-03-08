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

    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

printList(list);

function printListRecursion(list) {
    if (!list) return;

    console.log(list.value);
    printListRecursion(list.next);
}

printListRecursion(list);