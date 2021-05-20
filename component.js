'use strict';

const progress = document.querySelector('.progress');
const input = document.querySelector('input[type="range"]');
const billing = document.querySelector('.billing span');
const pageView = document.querySelector('.pageview');
const switchs = document.querySelector('.monthly .switch');
const yearOrMonth = document.querySelector('.time');


let price = ['8','12','16','24','36'];
let pack = ['10k','50k','100k','500k','1M'];
let discount = false;

window.addEventListener('DOMContentLoaded',function() {
  progressValue();
})


switchs.addEventListener('click',function() {
  this.querySelector('.circle').classList.toggle('active');
  this.classList.toggle('active');
  discount = !discount;
  values();
})



input.addEventListener('input',function() {
  values();
  progressValue();
})


function progressValue() {
  progress.style.width = (input.value / 4) * 100 + '%';
}

function values() {
  if(discount) {
    billing.textContent = '$' + Number(price[input.value] - (price[input.value] * .25)).toFixed(2);
    yearOrMonth.textContent = '/ yearly'
  } else {
    billing.textContent = '$' + Number(price[input.value]).toFixed(2);
    yearOrMonth.textContent = '/ monthly'
  }
  pageView.textContent = pack[input.value] + ' PAGEVIEW';
}