function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//exercicio 1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDays = document.querySelector('#days')

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const days = dezDaysList[i];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.className = 'day';
    if (days == 24 || days == 31) {dayListItem.className = 'day holiday'}
    if (days == 4 || days == 11 || days == 18) {dayListItem.className = 'day friday'}
    if (days == 25) {dayListItem.className = 'day holiday friday'}

    dezDays.appendChild(dayListItem)
  }
}

createDaysOfTheMonth();

//exercicio 2
function holidayButton() {
  const buttons = document.querySelector('.buttons-container');
  const holidayBtn = document.createElement('button');
  holidayBtn.innerHTML = 'Feriados';
  holidayBtn.id = 'btn-holiday';

  buttons.appendChild(holidayBtn);
}

holidayButton();

//exercicio 3
const clickHoliday = document.querySelector('#btn-holiday');
let click = false

clickHoliday.addEventListener('click', function(){
  const li = document.getElementsByClassName('holiday')
  if (click == false){
    for (let i = 0; i < li.length; i += 1){
      li[i].style.backgroundColor = 'rgb(135, 181, 132)'
    }
    click = true
    return void(0);
  }
  if (click == true){
    for (let i = 0; i < li.length; i += 1){
      li[i].style.backgroundColor = 'rgb(238,238,238)'
    }
    click = false
  }
})

//exercicio 4
function fridayButton() {
  const buttons = document.querySelector('.buttons-container');
  const fridayBtn = document.createElement('button');
  fridayBtn.innerHTML = 'Sexta-Feira';
  fridayBtn.id = 'btn-friday';

  buttons.appendChild(fridayBtn);
}

fridayButton();
