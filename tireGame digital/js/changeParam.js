const props_1 = document.querySelector('.props_1')
const props_2 = document.querySelector('.props_2')
const props_3 = document.querySelector('.props_3')
const btnSound = document.querySelector('.btn_sound')
const paramsArry = [props_1, props_2, props_3]

const paramBtn = document.querySelector('.monometr_monitor_functions')



paramBtn.addEventListener('click', () => {
    changeParam();
    playBtnSound();
})
let n = 1
function changeParam() {
    paramsArry.map((item, index) => {
        item.classList.add('opacity')
        if (index == n) {
            item.classList.remove('opacity')
        }


    })
    if (n == 2) {
        n = 0
    } else {
        n += 1
    }
}

function playBtnSound() {
    btnSound.currentTime = 0
    btnSound.play()
}
