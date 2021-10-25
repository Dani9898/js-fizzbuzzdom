let squareCont = document.getElementById("containerSquare");


for (let i = 1; i <= 100; i++)
{
    if (i % 3 === 0 && i % 5 === 0 ) {
        squareCont.innerHTML += `<div class="square multiple_15"></div>`;
    } else if (i % 5 === 0 ) {
        squareCont.innerHTML += `<div class="square multiple_5"></div>`;
    } else if ( i % 3 === 0) {
        squareCont.innerHTML += `<div class="square multiple_3"></div>`;
    } else {
        squareCont.innerHTML += `<div class="square">${i}</div>`;
    }
}