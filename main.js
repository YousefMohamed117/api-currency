let num = document.getElementById('num');
let first = document.getElementById('first');
let second = document.getElementById('second');
let result = document.getElementById('result');
let btn = document.getElementById('btn');

fetch('https://v6.exchangerate-api.com/v6/baa3a9e2509c9b674a3486a2/latest/usd').then(e=>e.json()).then(data=>{
    currencies =  Object.keys(data.conversion_rates).sort();
    currencies.forEach((currency)=>{
        first.innerHTML += `<option value="${currency}">${currency}</option>`
        second.innerHTML += `<option value="${currency}">${currency}</option>`
        document.querySelector('.date').innerHTML = `Date : ${data['time_last_update_utc']}`
        window.addEventListener("keypress", ({key}) => {
            if (key == "Enter")
              btn.click();
          });
    })
    btn.addEventListener('click',()=>{
       if(num.value != ''){
        fetch(`https://v6.exchangerate-api.com/v6/baa3a9e2509c9b674a3486a2/latest/${first.value}`).then(e=>e.json()).then(data=>{
            result.style.opacity = 1;
            result.innerHTML = `${num.value}  ${first.value}  =  ${(num.value * data.conversion_rates[second.value]).toFixed(2)} ${second.value} `})
           
       }})
    })

