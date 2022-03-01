let covers = document.querySelectorAll('.cover');

covers.forEach(cover => {
    // cover.addEventListener('click', () => {
    //     reActive()
    //     cover.classList.add('active')
    // })
    cover.onclick = function () {
            reActive()
            cover.classList.add('active')
    }
})

function reActive(){
    covers.forEach(cover => {
        cover.classList.remove('active')
    })
}