// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// 1. в зависимости от box-sizing width может считать разный размер
// 2. В разных браузерах width считает / не считает полосу прокрутки
// 3. Если ширина не определена в css, значения не будет