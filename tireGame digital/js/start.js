let btn = document.querySelector('.manometr_btn');
let arrow = document.querySelector('.manometr_arrow');

btn.addEventListener('click', fallArrow);



function fallArrow() {
    arrow.classList.toggle('manometr_arrow_animation')

    setTimeout(() => arrow.style.display = 'none', 3000)


}