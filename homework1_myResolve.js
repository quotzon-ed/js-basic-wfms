// При использовании косых ковычек `` мы можем внутни них вызывать переменные вместе с текстом
function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name}. Это моя первая программа!`);

    // Объявляем вложенную функцию
    // Задание: вывести на экран поочередно сообщения с данными из массива
    function showSkills() {
        let skills = ['html', 'css', 'js'];
        for (i = 0; i < skills.length; i++) {
            console.log(`Я владею ${skills[i]}.`);
        }
    }

    // Задание: если пользователю больше 18, выводим одно сообщение. Если меньше, то другое
    function checkAge() {
        age = prompt('Сколько вам лет?', '');
        age = age*1;
        if (age >= 18) {
            console.log(`Поздравляем, ${name}, Вы приняты на работу!`);
        } else {
            console.log(`${name}, придется Вам подрасти!`);
        }
    }

    // Задание: написать функцию, которая возвращает квадрат принимаемой переменной
    function calcPow(num) {
        return Math.pow(num, 2)
    }

    showSkills();
    checkAge();
    console.log(calcPow(8));
}

myFirstApp('Денис');