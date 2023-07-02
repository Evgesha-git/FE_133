// @ts-check

// let summ = 0,
//     count = 0;

// while (1){
//     let num = prompt();

//     // if (isNaN(num)){
//     //     alert('Повторите ввод числа');
//     //     continue;
//     // }

//     if (num === num && Number(num) !== Number(num)){
//         alert('Повторите ввод числа');
//         continue;
//     }

//     if (!+num){
//         break;
//     }

//     summ += Number(num);
//     count++;
// }

// document.write(`
//     Сумма ввёдённых числе равна: ${summ} <br />
//     Среднее арифметическое: ${summ / count}
// `)

// let str = "4 98 4 6 1 32 4 65 4 3 5 7 -89 7 10 1 36 8 57";
// let max = -Infinity,
//     min = Infinity;
// let buf = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//         buf += str[i];
//     } else {
//         if (max < +buf) max = +buf;
//         if (min > +buf) min = +buf;
//         buf = "";
//     }
// }

// console.log(
//     `
//     Максимальное число: ${max}
//     Минимальное число: ${min}
//     `
// );

// let num = prompt();
// let count = 0,
//     summ = 0,
//     rev = '';

// if (num?.length) {
//     count = num.length;

//     for (let i = 0; i < num.length; i++) {
//         summ += +num[i];
//     }

//     for (let i = num.length - 1; i >= 0; i--){
//         rev += num[i];
//     }
// }

// console.log(`
//     вводится число ${num}: цифр в числе = ${count}; сумма = ${summ}; обратный порядок ${rev}.
// `);

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let val of arr){
//     console.log(val);
// }

// for (let key in arr){
//     console.log(key);
// }

// let arr_2 = {
//     foo: 'a',
//     bar: 'b',
//     fooBar: 'c'
// }

// for (const key in arr_2) {
//     console.log(key);
// }

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]

// for (let s of arr){
//     for (let val of s){
//         console.log(val);
//     }
// }

// let arr = [2, 34, 1, 32, 1, 6, 2, 1, 4, 7, 3];
// let arr = [1, 2, 3];

// console.log(arr.length);
// arr[100] = 'lol';
// console.log(arr.length);
// console.log(arr);

/**
 * indexOf
 * lastIndexOf
 * sort
 * includes
 * at -> Не везде работает
 * from
 * pop
 * push
 * shift
 * unshift
 * slice
 * splice
 * reverce
 */

// console.log(arr);
// arr.push(4);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

/**
 * shift & unshift медленнее чем pop & push
 */

// console.log(arr.indexOf(1));
// console.log(arr.lastIndexOf(1));
// console.log(arr.indexOf(100));

// console.log(arr.includes(99));

// arr.sort(function(a, b){
//     return b - a;
// });
// console.log(arr);

// let arr = [2, 34, 1, 32, 1, 6, 2, 1, 4, 7, 3];

// console.log(arr.at(-1));

// let nArr = arr.slice(2, 5);
// console.log(nArr);
// console.log(arr);
// let nArr_2 = arr.splice(1, 4);
// console.log(nArr_2);
// console.log(arr);

let arr = [1, 2, 1, 2, 2, 23, 4, 3, 4, 5, 2, 1, 2, 4];

// let buff = new Set(arr);
// let arr_2 = [];
// console.log(buff);
// for (let v of buff){
//     arr_2.push(v)
// }
// console.log(arr_2);

// for (let i = 0; i < arr.length; i++){
//     while(1){
//         let index = arr.indexOf(arr[i]);
//         let lIndex = arr.lastIndexOf(arr[i]);
//         if (index === lIndex){
//             break;
//         }
//         arr.splice(lIndex, 1);
//     }
// }

arr = [... new Set(arr)]; // ... - spread оператор
console.log(arr);


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// let arr3 = [... arr1];

/**
 * Упрощенное представление spread оператора
let arr3 = [];
for (let v of arr1){
    arr3.push(v);
}
 */


// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// arr1.push(4);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

let a = 5, b = 10;

[a, b] = [b, a]; // свопинг

console.log(a);
console.log(b);