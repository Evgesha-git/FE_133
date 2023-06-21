/**
 * Создание переменых
 * let 
 * const
 * var
 */

// let a = 'str';

// let a = 23;

// var a = 324;
// var a = '21';

/**
 * Number - числа как целые, так и с плавующей точкой
 * String
 * Boolean - true/false
 * Null
 * Undefined
 * BigInt
 * Object
 * Symbol
 * 
 * typeof - определение типа переменной
 */

/**
 * Number 
 * Number()
 * унарный плюс - + -> +b
 * parseInt()
 * parseFloat()
 */

// let num = '-100%);';

// console.log(Number(num));
// console.log(+num);
// console.log(parseInt(num));
// console.log(parseFloat(num));

/**
 * String()
 * .toString()
 * + '' 
 */

// let str = 255;

// console.log(String(str));
// console.log(str.toString(16));
// console.log(str + '');


/**
 * + - сложение
 * - - вычитание
 * * - умножение
 * / - деление
 * % - остаток от деления
 * ** - возведение в степень
 */

// let a = 18,
//     b = 3,
//     c,
//     d,
//     e;

// console.log(a / b);
// console.log(a % b);

/**
 * Логические операторы
 * >
 * <
 * >=
 * <=
 * && - и
 * || - или
 * ! - логическое отрицание
 * == - сравнение
 * === - равенство
 * != - не равно
 * !== не равенство
 */

let a = 3 && null && '' && 1; // -> первое ложное
let b = 0 || null || '' || 1; // -> первое истинное
let c = null ?? undefined ?? 0 ?? 1 //-> истинные значения все, кроме null и undefined

/**
 * истинные значения - не 0 и не пустые стоки -> true
 * ложные значения - 0, пустая строка, null, undefined -> false
 */

console.log(a);
console.log(b);
console.log(c);

function f(a) {
    a = a ?? 0; // a || 0, a && 0
}