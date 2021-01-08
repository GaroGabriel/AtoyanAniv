const battery = document.querySelector('.battery')


setInterval(blink, 1000);

function blink() {
    battery.classList.toggle('d-none')
}
