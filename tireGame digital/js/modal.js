

const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal_btn')
const modalBackground = document.querySelector('.services')

closeBtn.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.toggle('d_none');
    modalBackground.classList.toggle('after_none')
}
