// 4. Написать функцию которая определяет знак зодиака по данным астрономии, соответствующей заданной дате. 
// Функция должна принимать строку в формате ‘{дата}/{месяц}’. Пример входных данных: ‘23/03’. Ожидаемый результат: 'Овен'. 
// Таблица зодиаков: Овен 21 марта — 20 апреля,,,,,,Телец 21 апреля — 21 мая,,,,,,, Близнецы 22 мая — 21 июня,,,,,, Рак 22 июня — 22 июля,,,,,, Лев 23 июля — 21 августа,,,,, 
// Дева 22 августа — 23 сентября,,,,,, Весы 24 сентября — 23 октября,,,,, Скорпион 24 октября — 22 ноября,,,,,, Стрелец 23 ноября — 22 декабря,,,,,, Козерог 23 декабря — 20 января,,,,,, 
// Водолей 21 января — 19 февраля,,,,,, Рыбы 20 февраля — 20 марта



let day = +prompt('Введите дату своего рождения');
let month = +prompt('Введите месяц своего рождения');
    switch(month){
        case 1:
            if (day <=21){
                console.log('Козерог')
            }else{
                console.log('Водолей')
            }
        break;
        case 2:
            if (day <=19){
                console.log('Водолей')
            }else{
                console.log('рыбы')
            }
        break;
        case 3:
            if (day <=20){
                console.log('рыбы')
            }else{
                console.log('овен')
            }
        break;
        case 4:
            if (day <=20){
                console.log('овен')
            }else{
                console.log('телец')
            }
        break;
        case 5:
            if (day <=21){
                console.log('Телец')
            }else{
                console.log('Близнецы')
            }
        break;
        case 6:
            if (day <=21){
                console.log('Близнецы')
            }else{
                console.log('рак')
            }
        break;
        case 7:
            if (day <=22){
                console.log('Рак')
            }else{
                console.log('лев')
            }
        break;
        case 8:
            if (day <=21){
                console.log('Лев')
            }else{
                console.log('Дева')
            }
        break;
        case 9:
            if (day <=23){
                console.log('Дева')
            }else{
                console.log('Весы')
            }
        break;
        case 10:
            if (day <=23){
                console.log('Весы')
            }else{
                console.log('скорпион')
            }
        break;
        case 11:
            if (day <=22){
                console.log('скорпион')
            }else{
                console.log('стрелец')
            }
        break;
        case 12:
            if (day <=22){
                console.log('стрелец')
            }else{
                console.log('козерог')
            }
        break;
    }
