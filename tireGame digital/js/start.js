const main_nums = document.querySelector('.main_nums');
const startBtn = document.querySelector('.start_btn')
const warning = document.querySelector('.warning')
const refreshBtn = document.querySelector('.monometr_monitor_rest')
const warn_sound = document.querySelector('.warn_sound')
const glass_sound = document.querySelector('.glass_sound')
const screen = document.querySelector('.screen')


startBtn.addEventListener('click', () => {
    start(); warningfun(); playBtnSound();
});

refreshBtn.addEventListener('click', () => {
    refresh();
    playBtnSound();

});

function refresh() {
    main_nums.textContent = 0

}


function start() {
    main_nums.textContent = 0

    var interval = setInterval(growNum, 67)


    function growNum() {

        main_nums.textContent = parseInt(main_nums.textContent) + 32

        if (parseInt(main_nums.textContent) > 1312578) {
            clearInterval(interval)
        }

    }
    setTimeout(brock, 10000)

    function brock() {
        glass_sound.play()
        glass_sound.loop = false
        screen.classList.remove('d-none-none')
    }

}

function warningfun() {
    setTimeout(intervalWarn, 3000)

    function intervalWarn() {
        setInterval(() =>
            warning.classList.toggle('d-none'), 250)
        function warnF() {

            warn_sound.play()
        }
        setTimeout(warnF, 250)

    }

}






