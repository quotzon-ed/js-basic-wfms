// Создаем функцию humanSayHello, которая выводит в log текст "Hello World"
function humanSayHello() {
    console.log('Hello World!');
}

// Вызываем созданную ранее функцию
humanSayHello();

// Создаем функцию, которая принимает в себе аргументы
function humanSayHelloArg(user) {
    console.log('Hello ' + user + '!');
}

// Вызываем функцию с аргументом
humanSayHelloArg('Denis');

// Создаем более сложную функцию
function calc(a, b) {
    console.log(a + b);
}

// Вызываем калькулятор
calc(4, 5);

// Функцию можно вызывать неоднократно (по сути бесконечное число раз)
calc(6, 5);
calc(9, 11);
calc(16756, 34564);

// Пример функции с возвращаемым значением
function calc2(a, b) {
    return a + b;
}

// Выводим результат работы функции в консоли
console.log(calc2(26, 8));

// Классификация функций: function Declaration и function Expression.
// Объявление функции обычным способом - это function Declaration
// В этом случае мы можем вызывать функцию даже до ее объявлеия
declarationFunc();

function declarationFunc() {

}

// Объявление функции в виде функционального выражения - function Expression
let expressionFunc = function() {

};

// Область видимости внутри и вне функции
// Создадим переменную, которая будет видна везде
let count = 5;

// Если мы создаим ее внутри функции, то ее значение будет доступно только внутри этой функции. При этом для остальной зоны видимости значение переменно останется равным 5
let countFunc = function() {
    let count = 8;
    count++;
    console.log(count);
};
countFunc();
console.log(count);