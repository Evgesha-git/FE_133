let c;

{
    let a = 5;
    let b = 6;
    c = a + b;
}

console.log(c);

//a + 2 * (x - b) = 16
let a = 8, b = 3;

/**
 * (x - b) = (16 - a) / 2
 * x = ((16 - a) / 2)) + b
 */

let x = ((16 - a) / 2) + b;

console.log(x);


// alert('Первый способ');
// document.write('Второй способ');
// console.warn('Третий способ');

console.log('Сумма переменных a и b \nравна: ' + (a + b));
console.log(`
Сумма переменных a и b
равна: ${a + b}`);

{
    let a = 5;
    a = a + 1;
    console.log(a);
    a += 1;
    console.log(a);
}

// let arr = [1, 2, 3, 4];

// document.addEventListener('click', () => void 0);

// [...arr].map();


{
    let a = 1;
    console.log(a++); //1 -> a = 1 -> a++ -> a - 1 -> a + 1
    console.log(++a); //3 -> a = 2 -> ++a -> a + 1 -> a - 3
    console.log(a--); //3
    console.log(--a); //1
}

// {
//     let a = Number(prompt('Введите число'));

//     // if (a > 0){
//     //     alert('Число положительное');
//     // }else{
//     //     alert('Число отрицательное');
//     // }
//     if (a > 0){ //Условие выполнения
//         alert('Число положительное'); //Если условие истинно
//     }else if (a < 0){ // Дополнительное условие
//         alert('Число отрицательное');
//     }else{ // Если ни одно условие не дало истинного результата
//         alert('Вы ввели 0');
//     }
// }

// {
//     let a = prompt();
//     if (a){
//         alert('В переменной есть значение' + a);
//     }else{
//         alert('Переменная пустая' + a);
//     }

//     // if (!a) return; 
// }

// {
//     let a = prompt();

//     switch (a) {
//         case '1':
//             console.log(1);
//             break;
//         case '2':
//             console.log(2);
//             break;
//         case '3':
//             console.log(3);
//             break;
//         case '4':
//             console.log(4);
//             break;
//         case '5':
//             console.log(5);
//             break;
//         default:
//             console.log('Неизвестное число');
//         // break;
//     }
// }

// {
//     // ? :
//     let a = Number(prompt());

//     let b = a > 0 ?
//         'Число положительное' :
//         a < 0 ?
//             'Число отрицательное' :
//             'Число равно 0';
//     console.log(b);
// }

// {
//     let a = +prompt('message');
//     let b = +prompt();

//     if (a > 0 && b > 0){
//         console.log('Числа положительные');
//     }else if (a > 0 && b < 0){
//         console.log('Число a положительно, а число b отрицательно');
//     }else if (a > 0 || b > 0){
//         console.log('Одно из чисел положительно');
//     }else {
//         console.log("Числа отрицательные");
//     }
// }

{
    let str = 's';

    console.log(str.repeat(100));
}