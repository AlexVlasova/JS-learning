function f() {
    alert( this ); // ?
  }

  let user = {
    g: f.bind(null)
  };

  user.g();

  //null. Контекст уже привязан, он не поменяется при передаче объекта