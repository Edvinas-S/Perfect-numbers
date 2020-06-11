"use strict"

const DOMresult = document.querySelector('#result');
const DOMagain = document.querySelector('#again');

const number = prompt('In what number range look for the perfect numbers?');

perfectNumber(number);

function perfectNumber(number) {
    let perfect = [];

    for (let i = 1; i <= number; i++) {
        let sum = 0;
        for (let k = 1; k <= (i / 2); k++) {
            if ( i % k === 0 ) {
                sum += k;
            }
        }
        if (sum === i) {
            perfect.push(i);
        }
    }
    return DOMresult.innerHTML = perfect.toString();
}

DOMagain.addEventListener('click', reload);

function reload() {
    location.reload();
}