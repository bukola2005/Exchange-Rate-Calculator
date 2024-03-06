const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');

const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch exchange rate and  update the dom
function caclulate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https:api.exchangerate-api.com/v4/lastest/${currency_one}`).then(res => res.json()).then(data =>{
        // console.log(data);
        const rate = data.rates[currencyEl_two];
        // console.log(rate); 

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });

    // fetch('items.json')
    // .then(res =>res.json())
    // // .then(date => console.log(date));
    // .then(data => (document.body.innerHTML = data[0].item));
}

// event listeners
currencyEl_one.addEventListener('change',caclulate);
amountEl_one.addEventListener('input',caclulate);
currencyEl_two.addEventListener('change',caclulate);
amountEl_two.addEventListener('input',caclulate);


swap.addEventListener('click',()=>{
    const tamp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = tamp;
    caclulate();
})
caclulate();