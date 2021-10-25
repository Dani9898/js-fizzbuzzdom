let squareCont = document.getElementById("containerSquare");
let fizz = "fizz";
let buzz = "buzz";
let fizzbuzz = "fizzbuzz";


for (let i = 1; i <= 100; i++)
{
    if (i % 3 === 0 && i % 5 === 0 ) {
        squareCont.innerHTML += `<div class="square multiple_15">${fizzbuzz}</div>`;
    } else if (i % 5 === 0 ) {
        squareCont.innerHTML += `<div class="square multiple_5">${buzz}</div>`;
    } else if ( i % 3 === 0) {
        squareCont.innerHTML += `<div class="square multiple_3">${fizz}</div>`;
    } else {
        squareCont.innerHTML += `<div class="square">${i}</div>`;
    }
}