// let days = prompt('Введите количество дней');

// let years = parseInt(days / 365);
// days = days % 365;
// let months = parseInt(days / 31);
// days %= 31;
// let weeks = parseInt(days / 7);
// days %= 7;
// let hours = days * 24;
// let minuts = hours * 60;
// let seconds = minuts * 60;

// document.write(`
//     <span>Количество лет: ${years ? years : 'меньше года'}</span><br />
//     <span>Количесвто месяцев: ${months ? months : 'меньше месяца'}</span><br />
//     <span>Количесвтво недель: ${weeks ? weeks : 'меньше недели'}</span><br />
//     <span>Количесвтво дней: ${days}</span><br />
//     <span>Часов: ${hours}</span><br />
//     <span>Минут: ${minuts}</span><br />
//     <span>Секунд: ${seconds}</span><br />
// `);

// for (let i = 0; i < 10; i++){
//     let a = i ** 2;
//     a /= 3;
//     a += 12;
//     console.log(a);
// }

/**
 * Циклы:
 * for -> for (iterator; условие выхода; изменение итератора)
 * while -> while (условие выполнения)
 * do .. while -> do {
 *  ...
 * } while(условие выполнения)
 */

// while(0){
//     console.log('Выполнение цикла while');
// }

// do {
//     console.log('Выполнение цикла do..while');
// } while (0);

// let index = 0
// for (let index = 0; index < 50; index++) {   
//     if (index > 40){
//         break;
//     }
//     if (index % 3 === 0){
//         continue;
//     }
//     console.log(index);
// }

// let summ = 0;

// while(true){
//     let num = prompt('Введите число');
//     if (isNaN(num)){
//         alert ('Ввели не число');
//         continue;
//     }
//     if( +num === 0 || num === ''){
//         break;
//     }
//     summ += Number(num);
// }

// console.log(summ);

// for (let i = 1; i < 10; i++){
//     let s = '';
//     for (let j = 0; j < i; j++){
//         s += i;
//     }
//     console.log(s);
// }

let summ = 0;

for (let i = 5; i <= 15; i++){
    summ += i * 2; // summ = summ + (i * 2)
}

console.log(summ);
