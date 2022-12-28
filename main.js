// Задание 3

var age = +prompt('Введите свой возраст')

if(age > 0 && age < 18 || age == 18) {
    alert('Вы ещё молоды,Вам нужно учиться');
}else if(age > 18 && age < 50 || age == 50) {
    alert('Вам нужно работать');
}else if(age > 50 && age < 59 || age == 59) {
    alert('Вам скоро на пенсию');
}else if (age > 59 && age < 100 || age == 100) {
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так')
}


// Задание 2

var time = +prompt('Введите время в цифрах')
switch(time) {
    case 1:
        alert(time + ' час ночи ');
        break;
    case 2:
        alert(time + ' часа ночи ');
        break;
    case 3:
        alert(time + ' часа ночи ');
        break;
    case 4:
        alert(time + ' часа ночи ');
        break;
    case 5:
        alert(time + ' часов ночи ');
        break;
    case 6:
        alert(time + ' часов ночи ');
        break;
    case 7:
        alert(time + ' часов утра ');
        break;
    case 8:
        alert(time + ' часов утра ');
        break;
    case 9:
        alert(time + ' часов утра ');
        break;
    case 10:
        alert(time + ' часов утра ');
        break;
    case 11:
        alert(11 + ' часов дня ');
        break;
    case 12:
        alert(12 + ' часов дня ');
        break;
    case 13:
        alert(1 + ' час дня ');
        break;
    case 14:
        alert(2 + ' часа дня ');
        break;
    case 15:
        alert(3 + ' часа дня ');
        break;
    case 16:
        alert(4 + ' часа дня ');
        break;
    case 17:
        alert(5 + ' часов дня ');
        break;
    case 18:
        alert(6 + ' часов вечера ');
        break;
    case 19:
        alert(7 + ' часов вечера ');
        break;
    case 20:
        alert(8 + ' часов вечера ');
        break;
    case 21:
        alert(9 + ' часов вечера ');
        break;
    case 22:
        alert(10 + ' часов вечера ');
        break;
    case 23:
        alert(11 + ' часов вечера');
        break;
    case 24:
        alert(' полночь ');
        break;
    default:
        alert('Упс,что-то пошло не так...')
        break;
}


// Задание 3


var a = +prompt("Введите первое число"); 
var b = +prompt("Введите второе число"); 
var c = +prompt("Введите третье число");
	
if ((a==b) && (a==c) && (b==c)){
    alert ('Вы вели одинаковые числа');
}else if ((a>b) && (a<c) || (a<b) && (a>c)){
    alert (a);
}else if ((b>a) && (b<c) || (b<a) && (b>c)){
    alert (b);
}else if ((c>a) && (c<b) || (c<a) && (c>b)){
    alert (c);
}else if (c=(a==b)){
    alert ('Тут два одинаковых числа, повторите попытку');
}else{
    alert ('Тут два одинаковых числа, повторите попытку');
}

			