const slides = document.getElementsByClassName('carousel-item')
const indicators = document.getElementsByClassName('indicator')
const nextBtn = document.getElementById('carousel-btn-next')
const prevBtn = document.getElementById('carousel-btn-prev')
const checkbox = document.getElementById('checkbox')
const toggle = document.getElementById('checkbox-label')
// carousel variables
let slidePosition = 0
const totalSlides = slides.length


nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPrevSlide)
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode')
    document.toggle.classList.toggle('dark-mode')
    slides.classList.remove('depth')
    slides.classList.add('depth-dark')
})

function hideAllSlides() {
    for (const slide of slides) {
        slides[slidePosition].classList.remove('carousel-item-visible')
        slides[slidePosition].classList.add('carousel-item-hidden')
    }
    for (const indicator of indicators) {
        indicators[slidePosition].classList.remove('indicator-active')
    }
}

function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add('carousel-item-visible')
    indicators[slidePosition].classList.add('indicator-active')
}

function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add('carousel-item-visible')
    indicators[slidePosition].classList.add('indicator-active')
}