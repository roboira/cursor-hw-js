//Необходимо написать программу выполняющую сложение чисел от N до M 
//(N и M – задаются пользователем), а так же программа должна уметь пропускать четные числа.
// Ниже приведен алгоритм, что нужно сделать.

//(!) При выводе суммы можно использовать функции console.log или document.writeln

// 1 Получите у пользователя число(N) от которого мы будем складывать. 
//Получить число можно с помощью prompt.  Помните, ЧИСЛО, не СТРОКА!

let start = NaN;

while (true) {

    let inputValue = (prompt("Введите первое число"));
    start = parseInt(inputValue);
    if (inputValue.length == start.toString().length) {
        break;
    }
}

console.log("старт", start);

// // 2.Проверьте является ли переданное значение N ЦЕЛЫМ числом. 
// //(Подсказка: если при конвертации в целое число мы получили NaN – это не подходящее нам число)

let end = NaN;

while (true) {

    let inputValue = (prompt("Введите второе число"));
    end = parseInt(inputValue);
    if (inputValue.length == end.toString().length && end > start) {
        break;
    }
}

console.log("end = ", end);


// 3 Получите у пользователя булевый параметр(true/false), который подскажет нам нужно 
//ли пропускать  четные числа. TRUE – нужно, FALSE – не нужно. Используйте функцию confirm

let isOdd = (confirm("нужно ли пропускать четные числа"));
console.log(isOdd);

//4 Напишите цикл, который будет складывать числа от ранее полученных N и M

let result = 0;

for (start; start <= end; start++) {
    if (isOdd) {
        if (start % 2 != 0) {
            result += start;
            console.log(result);
        } else {
            continue;
        }
    } else {
        result += start;
        console.log(result);
    }
}
console.log("result = ", result);