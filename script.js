// Задание 1
let num1 = Number(prompt('Первое число:'));
let num2 = Number(prompt('Второе число:'));
function srv(a,b){
    if (a < b){
        console.log(-1);
    }else if (a > b){
        console.log(1);
    }else if (a == b){
        console.log(0);
    }else{
        console.log('Не удовлетворяет условиям!');
    }
}
srv(num1,num2);
//Задание 2
let chis = Number(prompt('Введи число:'));
function factor(c){
    let fac = 1;
    if (Math.sign(c) == 1){ //проверка на отрицательность
        for(let i = 1; i < c + 1; i++){
            fac = fac * i;
            console.log('К заданию2',fac)
        }
    }else if(c == 0){
        console.log(fac)
    }else{
        console.log('Вычислить не получилось!')
    }
}
factor(chis);
//Задание 3
function unit(){
    let all =[];
    for(let i = 0; i < 3; i++){
        let n1 = prompt('Введите число:');
        all.push(n1);
    }
    let result = all.join('') //Разделитель '' между числами
    console.log('Итог', Number(result));
}
unit()
//Задание 4
function s(){
    let l = Number(prompt('Введи длину'));
    let h = Number(prompt('Введи ширину'));
    let s = 0;
    if (l == 0){
        s = 4 * h;
        console.log('Площадь квадрата:', s);
    }else if (h == 0){
        s = 4 * l;
        console.log('Площадь квадрата:', s); 
    }else{
        s = l * h;
        console.log('Площадь прямоугольника:', s);
    }
}
s();
//Задание 5
let z = Number(prompt('Введи число:'))
function sover(z1){
    let sum = 0;
    for (let i = 1; i < z1; i++){
        if (z1 % i == 0){
            sum = sum + i;
        }else{
            continue;
        }
    }
    if (sum == Number(z1)){
        console.log('Число ' + Number(z1) + ' Совершенное');
    }else{
        console.log('Число ' + Number(z1) + ' Не совершенное');
    }
}
sover(z);
//Задание 6
function sover2(){
    let min = Number(prompt('Минимальное число:'));
    let max = Number(prompt('Максимальное число:'));
    let mas = [];
    for(min; min < max + 1; min++){
        mas.push(min);
    }
    for(let i = 0; i < mas.length; i++){
        sover(mas[i]);
    }
}
sover2();
//Задание 7
let h1 = Number(prompt('Введи часы:'));
let m1 = Number(prompt('Введи минуты:'));
let s1 = Number(prompt('Введи секунды:'));
function ntime(h,m,s){
    // let h = Number(prompt('Введи часы:'));
    // let m = Number(prompt('Введи минуты:'));
    // let s = Number(prompt('Введи секунды:'));
    if (h == 0){
        console.log('чч: ' + 0 + ' мм: ' + m + ' сс: ' + s);
    }else if (m == 0){
        console.log('чч: ' + h + ' мм: ' + 0 + ' сс: ' + s);
    }else if (s == 0){
        console.log('чч: ' + h + ' мм: ' + m + ' сс: ' + 0);
    }else {
        console.log('чч: ' + h + ' мм: ' + m + ' сс: ' + s);
    }
}
ntime(h1,m1,s1);
//Задание 8
let h_2 = Number(prompt('Введи часы:'));
let m_2 = Number(prompt('Введи минуты:'));
let s_2 = Number(prompt('Введи секунды:'));
function sec(h2,m2,s2){
    // let h2 = Number(prompt('Введи часы:'));
    // let m2 = Number(prompt('Введи минуты:'));
    // let s2 = Number(prompt('Введи секунды:'));
    h2 = h2 * 3600;
    m2 = m2 * 60;
    let d = Number(h2 + m2 + s2)
    console.log('Колличество секунд:', d);
}
sec(h_2,m_2,s_2);
//Задание 9
let h_3 = Number(prompt('Введи часы в секундах:'));
let m_3 = Number(prompt('Введи минуты в секундах:'));
let s_3 = Number(prompt('Введи секунды:'));
function obr(h3,m3,s3){
    // let h3 = Number(prompt('Введи часы в секундах:'));
    // let m3 = Number(prompt('Введи минуты в секундах:'));
    // let s3 = Number(prompt('Введи секунды:'));
    h3 = h3 / 3600;
    m3 = m3 / 60;
    ntime(h3,m3,s3)
}
obr(h_3,m_3,s_3);
//Задание 10
function razn(){
    let h_4 = Number(prompt('Введи часы (первая дата):'));
    let m_4 = Number(prompt('Введи минуты (первая дата):'));
    let s_4 = Number(prompt('Введи секунды (первая дата):'));
    let h_5 = Number(prompt('Введи часы (вторая дата):'));
    let m_5 = Number(prompt('Введи минуты (вторая дата):'));
    let s_5 = Number(prompt('Введи секунды (вторая дата):'));
    let a = sec(h_4,m_4,s_4);
    let b = sec(h_5,m_5,s_5);
    let ruz = a - b;
    let rux1 = ruz / 3600;
    let rux2 = ruz - rux1 * 3600;
    let rux_2 = rux2 / 60;
    let rux3 = rux2 - rux_2 * 60;
    ntime(rux1,rux_2,rux3)
}
razn();