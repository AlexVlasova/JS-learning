const user = {
    name: "John"
  };

  // это будет работать?
  user.name = "Pete";
  // Да, так как константой является ссылка на объект,
  // а не свойство объекта