// I. Создайте программу, которая выводит в консоль числа по нарастающей в диапазоне,
// обозначенном пользователем при помощи prompt.
// Примерный алгоритм
// 1. Введите первое число диапазона
// 2. Введите второе число диапазона
// 3. Вывод чисел в консоль
// В случае, если диапазон чисел включает в себя менее пяти значений, у пользователя
// повторно запрашиваются корректные данные.
// В случае, если первое число диапазона больше второго, вывод чисел должен идти в
// обратном порядке, т.е. от большего к меньшему.

let firstNum = 0;
let secondNum = 0;

do {
  firstNum = +prompt("Введите первое число диапазона");
  secondNum = +prompt("Введите второе число диапазона");
  if (Math.abs(firstNum - secondNum) <= 5) {
    alert("слишком маленький диапазон");
  }
} while (Math.abs(firstNum - secondNum) <= 5);
switch (firstNum < secondNum) {
  case true:
    for (firstNum; firstNum <= secondNum; firstNum++) {
      console.log(firstNum);
    }
    break;
  default:
    for (firstNum; secondNum <= firstNum; firstNum--) {
      console.log(firstNum);
    }
    break;
}

// 2. Создайте программу, которая проверяет введенный пользователем PIN-код. На ввод
// дается три попытки. В случае, если все попытки будут провальными, пользователь
// должен ввести для проверки PUK-код, имея на это также три попытки.
// Итоговый успех или провал операции операции должен отображаться на либо при
// помощи alert, либо в консоли.

let pin = 1234;
let puk = 4321;
let pinCode = 0;
let pukCode = 0;

for (let i = 3; i > 0; i--) {
  pinCode = +prompt(
    `введите пинкод из 4 символов у вас осталось - ${i} попытки`
  );
  n = i;
  n--;

  if (pinCode === pin) {
    alert(`Вы ввели правльный пинкод, доступ получен!`);
    break;
  } else {
    alert(
      `Вы ввели не верный пинкод, осталось - ${n} попыток, после чего вам будет необходимо ввести PUK `
    );
  }
}
if (pinCode !== pin) {
  for (let i = 3; i > 0; i--) {
    pukCode = +prompt(
      `введите Puk - код из 4 символов у вас осталось - ${i} попытки`
    );
    n = i;
    n--;

    if (pukCode === puk) {
      alert(`Вы ввели правльный PUK - код, доступ получен!`);
      console.log("вход выполнен");
      break;
    } else if (pukCode !== puk) {
      alert(
        `Вы ввели не верный PUK - код, осталось - ${n} попыток, после чего вы потеряете доступ навсегда `
      );
    }
    if (n === 0) alert(`Осталось ${n} попыток, вы заблокированы `);
  }
} else {
  console.log("вход выполнен");
}


// 3. Создайте программу, которая выводит на экран (alert, console.log) данные для чисел 
// произвольного диапазона (можно установить его самостоятельно) по аналогии с задачей 
// 2 предыдущего домашнего задания (больше 100, четное/нечетное, 
// положительное/отрицательное).

let firstNumScore = Math.ceil((Math.random() * (50 - (-50)) + (-50)));
let secondNumScore = Math.ceil((Math.random() * (50 - (-50)) + (-50)));
if(firstNumScore < secondNumScore){
    for (firstNumScore; firstNumScore < secondNumScore; firstNumScore++){
        if (((firstNumScore % 2) === 0) && (firstNumScore > 100) && (firstNumScore > 0)){
        console.log(`${firstNumScore} - четное, больше 100, положительное` );
    }else if(((firstNumScore % 2) === 0) && (firstNumScore > 100) && (firstNumScore < 0)){
        console.log(`${firstNumScore} - четное, больше 100, отрицательное` );
    }else if(((firstNumScore % 2) === 0) && (firstNumScore < 100) && (firstNumScore < 0)){
        console.log(`${firstNumScore} - четное, меньше 100, отрицательное` );
    }else if(((firstNumScore % 2) !== 0) && (firstNumScore < 100) && (firstNumScore < 0)){
        console.log(`${firstNumScore} - нечетное, меньше 100, отрицательное` );
    }else if(((firstNumScore % 2) !== 0) && (firstNumScore < 100) && (firstNumScore > 0)){
        console.log(`${firstNumScore} - нечетное, меньше 100, Положительное` );
    }else if(((firstNumScore % 2) !== 0) && (firstNumScore > 100) && (firstNumScore > 0)){
        console.log(`${firstNumScore} - нечетное, больше 100, Положительное` );
    }else if(((firstNumScore % 2) === 0) && (firstNumScore < 100) && (firstNumScore > 0)){
        console.log(`${firstNumScore} - четное, меньше 100, Положительное` );
    }else if(((firstNumScore % 2) !== 0) && (firstNumScore > 100) && (firstNumScore > 0)){
        console.log(`${firstNumScore} - нечетное, больше 100, отрицательно` );
    }else{

    }
    
    }
}



// 4.IV. Создайте цикл, который при любом диапазоне перебираемых в нем чисел, 
// прерывался бы на седьмой итерации.

for (let i = 1; i < 8; i++){
    console.log(`итерация № ${i}`)
}