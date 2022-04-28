// 1. Напишите программу, которая последовательно запрашивает у пользователя имя,
// фамилию и никнейм. Далее при помощи alert или консоли отобразите приветственное
// сообщение исходя из следующих условий:
// -+ введены имя, фамилия и никнейм -> обратиться к пользователю по имени и фамилии;
// - +введены имя, фамилия -> обратиться к пользователю по имени и фамилии;
// - +введены никнейм и фамилия -> обратиться к пользователю через никнейм;
// - +введены никнейм и имя -> обратиться к пользователю через имя;
// - не введено ни одно значение или введена только фамилия или только никнейм ->
// обратиться к пользователю через ‘Noname’;
let firstName = prompt('Введите Имя');
let lastName = prompt('Введите Фамилию');
let nikName = prompt('Введите никнейм');
if (firstName && lastName && nikName){
    console.log(`Hello ${firstName} ${lastName} ${nikName}`);
}else if(firstName && lastName){
    console.log(`Hello ${firstName} ${lastName}`);
}else if(lastName && nikName){
    console.log(`Hello  ${lastName} ${nikName}`);
}else if (firstName && nikName){
    console.log(`Hello ${firstName} ${nikName}`);
}else if(lastName || nikName){
    console.log(`Hello noname`);
}else {
    console.log(`Hello noname`);
}

// 2. При помощи prompt запросите у пользователя любое число и проведите его проверку
// по следующим параметрам – больше/меньше 100, четное/нечетное, дробное/не
// дробное, положительное/отрицательное.
// Результаты проверки выведите на экран любым доступным способом примерно в
// следующем формате - "Введенное вами число меньше ста, четное, положительное,
// недробное".
// Необязательное условие: если пользователь ввел значение, которое нельзя
// преобразовать к числу, то сообщите об этом пользователю и попробуйте определить
// язык, на котором введено сообщение. Условно предполагаем, что все символы были
// введены на одно языке.

let number = prompt("введите любое число");
let en = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let ru = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "э",
  "ю",
  "я",
];
let leng = 0;
if (number < 100 && number % 2 === 0 && number > 0) {
  console.log(
    `Ваше число ${number} положительное, четное, дробное, меньше 100`
  );
} else if (number < 100 && number % 2 !== 0 && number > 0) {
  console.log(
    `Ваше число ${number} положительное, нечетное, недробное, меньше 100`
  );
} else if (number < 100 && number % 2 === 0 && number < 0) {
  console.log(
    `Ваше число ${number} отрицательное, четное, дробное, меньше 100`
  );
} else if (number < 100 && number % 2 !== 0 && number < 0) {
  console.log(
    `Ваше число ${number} отрицательное, нечетное, недробное, меньше 100`
  );
} else if (number > 100 && number % 2 !== 0 && number < 0) {
  console.log(
    `Ваше число ${number} отрицательное, нечетное, недробное, больше 100`
  );
} else if (number > 100 && number % 2 !== 0 && number > 0) {
  console.log(
    `Ваше число ${number} положительное, нечетное, недробное, больше 100`
  );
} else if (number > 100 && number % 2 === 0 && number > 0) {
  console.log(
    `Ваше число ${number} положительное, четное, дробное, больше 100`
  );
} else if (isNaN(number) !== false) {
  for (let i = 0; i < en.length; i++) {
    switch (number[0]) {
      case en[i]:
        lang = true;
        break;
      case ru[i]:
        lang = false;
      default:
        break;
    }
  }
  switch (lang) {
    case true:
      console.log("вы ввели английское слово");
      break;
    default:
      console.log("нам неизвестен данный язык! Вывод вы китаец ");
      break;
  }
} else {
  console.log("введен не верный формат ");
}

// Перепишите задачи 2 и 3 из предыдущего домашнего задания, используя вместо if
// тернарный оператор.

// вторая задача
// let firstName = prompt("Введите свое имя");
// let age = prompt("введите свой возраст");
// age >= 18 ?  alert(`${firstName}  Добро пожаловать`):alert(`${firstName}  Для вас доступ закрыт`);
//третья задача

let firstNumber = +prompt('Введите первое число');
let twoNumber = +prompt('Введите второе число');
let threeNumber = +prompt('Введите третье число');

let sum = firstNumber + twoNumber + threeNumber;
(typeof firstNumber === 'number') && (typeof twoNumber === 'number') && (typeof threeNumber === 'number') ? console.log(sum) : "вы ввели что то не так " ;

// 4. При помощи конструкции switch-case напишите программу, которая выводит на экран
// введенные цифры от 0 до 9 в текстовом виде.
// Пример: 0 -> 'ноль', 1 -> 'один', 2 -> 'два' и т.д.
// В случае, если введенная цифра превысила 10, программа должна уведомлять об этом
// пользователя соответствующим сообщением.
// Случай, когда пользователь ввел некорректное значение, которое невозможно
// преобразовать к числу, также должен обрабатываться. Для такой проверки можно
// использовать функцию isNaN(value) - которая возвращает false для числовых значений и
// true для прочих

let num = +prompt("Введите число от 0 до 9");
switch (isNaN(num)) {
  case true:
    console.log("Вы ввели не правльное значение");
    break;
  default:
    switch (num > 10) {
      case true:
        console.log("вы ввели слишком большое значение");
        break;
      default:
        switch (num) {
          case 0:
            console.log(`${num} - ноль`);
            break;
          case 1:
            console.log(`${num} - один`);
            break;

          case 2:
            console.log(`${num} - два`);
            break;
          case 3:
            console.log(`${num} - три`);
            break;
          case 4:
            console.log(`${num} - четыре`);
            break;
          case 5:
            console.log(`${num} - пять`);
            break;
          case 6:
            console.log(`${num} - шесть`);
            break;
          case 7:
            console.log(`${num} - семь`);
            break;
          case 8:
            console.log(`${num} - восемь`);
            break;
          case 9:
            console.log(`${num} - девять`);
            break;
        }
    }
}
