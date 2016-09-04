// names
var names = [];

for (var i = 0; i < 5; i++) {
    names[i] = prompt('Введите имя:');
}
console.log(names);
// login chek
var login = prompt('Ваше имя');
console.log('login=', login);

for (var i = 0; i < names.length; i++) {
    names[i]

    if (login == names[i]) {
      var message = (names[i] + ' Вы успешно вошли');

        break;

    } else {
        var message = (login + ' пользователь не найден');
    }
}
alert(message);
