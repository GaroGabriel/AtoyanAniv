const them_btn = document.querySelector('.monometr_monitor_light')
const background = document.querySelector('.monometr_monitor_inner')
const light_icon = document.querySelector('.fa-lightbulb')
const battary = document.querySelector('.fa-battery-quarter')
const nums = document.querySelector('.main_nums')


them_btn.addEventListener('click', changeThem)

function changeThem() {

    background.classList.toggle('monitor_darkMode')
    light_icon.classList.toggle('light')
    battary.classList.toggle('light')
    nums.classList.toggle('light')
}
