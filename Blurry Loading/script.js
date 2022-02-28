let bg = document.getElementById('bg')
let percent = document.querySelector('.percent')
let load = 0
let blur = setInterval(blurring, 20);

function blurring(){
    load++
    if (load > 99) {
      clearInterval(blur)
    }
    percent.innerHTML = `${load}%`
    percent.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }