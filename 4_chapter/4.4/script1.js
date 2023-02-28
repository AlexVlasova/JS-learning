function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }

  let user = makeUser();

  alert( user.ref.name ); // Каким будет результат?

// Будет ошибка, так как this или undefined, или window
// Можно починить, введя метод ref, не свойство