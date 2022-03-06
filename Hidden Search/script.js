let search = document.querySelector('.search');
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

btn.onclick = function() {
    search.classList.toggle('active')
    input.focus();
}