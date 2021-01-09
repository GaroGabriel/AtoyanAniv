
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal_btn')
const modalBackground = document.querySelector('.W_container')

closeBtn.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.toggle('d-none-none');
    modalBackground.classList.toggle('after_none')

}
