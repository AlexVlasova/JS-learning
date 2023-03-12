function Counter() {
    let count = 0;

    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }

  let counter = new Counter();

  alert( counter.up() ); // ?
  alert( counter.up() ); // ?
  alert( counter.down() ); // ?

  // Да, функции будут работать. При создании методов они ссылаются на один и тот же count, а значит будут изменять его вместе