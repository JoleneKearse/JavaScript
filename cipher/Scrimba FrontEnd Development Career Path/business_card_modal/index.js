const overlay = document.getElementById('overlay')
const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')

openModal.addEventListener('click', function() {
    overlay.style.display = 'block'
})

closeModal.addEventListener('click', () => {
    overlay.style.display = 'none'
})