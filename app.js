var count = 0;
let increment = document.querySelector('#increase');
let decrement = document.querySelector('#decrease');

increment.addEventListener('click', () => {
    count++; // increment the count
    document.querySelector('#count').innerHTML = count; // update the count display
});

decrement.addEventListener('click', () => {
    count--; // decrement the count
    document.querySelector('#count').innerHTML = count; // update the count display
});
