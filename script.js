/* Fetches the progress bar */
const progress = document.getElementById('progress');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++

    /* This if statement says that if the currentActive gets above the max
       amount of circles, then reset it to the max amount with 
       currentActive = circles.length. Since circles.length is a max of 4 */
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})


prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    /* List through each circle in the function with a .forEach */
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}