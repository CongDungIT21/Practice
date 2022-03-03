const progress = document.getElementById('progress');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const circles = document.querySelectorAll('.circle')

console.log(progress)
console.log(prev)
console.log(next)
console.log(circles)

let currentActive = 1
next.onclick = function() {
    currentActive++;

    if(currentActive > circles.length) currentActive = circles.length;

    update();
}

prev.onclick = function() {
    currentActive--;
    if(currentActive < 1) currentActive = 1;

    update()
}

function update(){
    if(currentActive === 1){
        prev.disabled = true
    }
    else if(currentActive == circles.length){
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }

    circles.forEach((circle, index) =>{
        if(index<currentActive){
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
}