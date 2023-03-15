let animal = {
    eat() {
      this.full = true;
    }
  };

  let rabbit = {
    __proto__: animal
  };

  rabbit.eat(); // Свойство появится у rabbit