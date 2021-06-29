var investmentRange = document.querySelector('#investment-amount-range');
var investmentAmount = document.querySelector('#investment-amount');
var investmentDuration = document.querySelector('#investment-duration')
var totalIncome = document.querySelector('#total-income');
var netIncome = document.querySelector('#net-income');
var taxes = document.querySelector('#tax');
var investmentTypes = document.querySelector('.income-calculator__type-label');
var investmentRadios = document.querySelectorAll('.income-calculator__radio');

const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const endMonth = 3;
const endYear = 2023;

const resultMonthsNumber = ((endYear - currentYear) * 12 + endMonth - currentMonth);

investmentDuration.value = resultMonthsNumber;

function discharge() {
  // investmentAmount.value = String(investmentAmount.value.replace(/[^0-9.]/g,''));
  // investmentAmount.value = String(investmentAmount.value.replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function count(){
  var percentRate = document.querySelector('.income-calculator__radio:checked').getAttribute('data-percent-rate');
  totalIncome.innerHTML = Math.round(+investmentAmount.value+(investmentAmount.value * resultMonthsNumber * percentRate / 12 / 100)) + " ₽";
  netIncome.innerHTML = (Math.round(+investmentAmount.value+(investmentAmount.value * resultMonthsNumber * percentRate / 12 / 100)) - Math.round(investmentAmount.value * resultMonthsNumber * percentRate / 12 / 100 * 0.13) - investmentAmount.value)+ " ₽" ;
  taxes.innerHTML = Math.round(investmentAmount.value * resultMonthsNumber * percentRate / 12 / 100 * 0.13) + " ₽";
}

investmentRange.addEventListener('input', function (event) {
  investmentAmount.value = event.target.value;
  count();
  discharge();
  var rangepercent = investmentRange.value / 1000000;
  event.target.style.background = 'linear-gradient(90deg, rgba(228,190,152,1)' + rangepercent + '% , rgba(255,255,255,0) ' + rangepercent + '% )';
});

investmentAmount.addEventListener('input', function (event) {
  investmentRange.value = event.target.value;
  count();
  discharge();
});

investmentRadios.forEach((item) => {
  item.addEventListener('input', function () {
    count();
  });
});

count();


