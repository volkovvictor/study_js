'use strict';

// 1-е задание
let money = 30000,
   income = 'Фриланс',
   addExpenses = 'Проездной, Квартира, Eда',
   deposit = false,
   mission = 300000,
   period = 12,
   budgetDay = money / 30;

// 2-е задание
console.log( typeof money );
console.log( typeof income );
console.log( typeof deposit );

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев.
Цель заработать ${mission} рублей.`);

console.log(addExpenses.toLocaleLowerCase().split(', '));

console.log(budgetDay);

// 3-е задание