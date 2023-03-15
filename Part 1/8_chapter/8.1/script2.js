let head = {
    glasses: 1
  };

  let table = {
    pen: 3
  };

  let bed = {
    sheet: 1,
    pillow: 2
  };

  let pockets = {
    money: 2000
  };

  pockets.__proto__ = bed;
  bed.__proto__ = table;
  table.__proto__ = head;

  // Теоретически, glasses быстрее получить через head, так как это свойство непосредственно самого объекта
  // Но в современных движках из-за оптимизации это становится не важно