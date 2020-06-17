"use strict";
let money, time;
function start() {
    money = +prompt('Ваш бюджет на месяц:','Введите число');
    while(isNaN(money) || money == ""|| money== null){
        money = +prompt('Ваш бюджет на месяц:','Введите число');
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {} ,
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце",''),
                b = prompt("Во сколько обойдется?",'');
            appData.expenses[a]=b;
        
            if( (typeof(a)==='string') && (typeof(a) != null) && (typeof(b) != null) 
            && a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.expenses[a]=b;
            }else{
                i-=1;
            }
        
        }
    },
    detectDayBudgete: function(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
alert('Ваш бюджет на день равен' + appData.moneyPerDay + 'рублей');
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        }else if(appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        }else if(appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        }else{console.log('Произошла ошибка');
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 4; i++) {
            let q = prompt('Статья необязательных расходов?','Введите текст');
            appData.optionalExpenses[i] = q;
        }
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt ('Какова сумма накоплений?',''),
                percent = +prompt('Под какой процент?','');
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
        }   
    },
    chooseIncome: function(){
        let items;
        while(!isNaN(items) || items == null || items == ''){
            items = prompt('Что принесет дополнительный доход?','Перечислите через запятую');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort;
        let nump = 1;
        let opp ='';
        appData.income.forEach(function(element,index){ 
            opp += (nump + ':' + element + '\n');
            nump++;
        })
        alert('Способы доп. заработка:\n' + opp);
    }
};
console.log('Наша программа включает в себя данные: ')
for(let k in appData){
    console.log(k);
}